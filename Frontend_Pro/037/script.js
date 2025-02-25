const playerBoard = document.getElementById('player-board');
const opponentBoard = document.getElementById('opponent-board');
const status = document.getElementById('status');
const socket = new WebSocket('ws://localhost:8080');

let playerShipCells = new Set();
let isSetupPhase = true;
let myTurn = false;
let selectedShip = null;
let availableShips = null;

const initialShips = [
    { size: 4, count: 1 },
    { size: 3, count: 2 },
    { size: 2, count: 3 },
    { size: 1, count: 4 },
];

function initAvailableShips() {
    availableShips = JSON.parse(JSON.stringify(initialShips));
}
initAvailableShips();


const shipControls = document.createElement('div');
shipControls.id = 'ship-controls';
shipControls.innerHTML = `
  <div>
    <label>
      <input type="radio" name="orientation" value="horizontal" checked> Горизонтально
    </label>
    <label>
      <input type="radio" name="orientation" value="vertical"> Вертикально
    </label>
  </div>
  <div id="ship-buttons"></div>
`;
document.body.insertBefore(shipControls, document.body.firstChild);

function renderShipButtons() {
    const shipButtonsDiv = document.getElementById('ship-buttons');
    shipButtonsDiv.innerHTML = '';
    availableShips.forEach((ship, index) => {
        if (ship.count > 0) {
            const btn = document.createElement('button');
            btn.textContent = `Корабель розміру ${ship.size} (${ship.count})`;
            btn.dataset.shipIndex = index;
            btn.addEventListener('click', () => {
                selectedShip = { index, size: ship.size };
                Array.from(shipButtonsDiv.children).forEach(child => child.classList.remove('active'));
                btn.classList.add('active');
            });
            shipButtonsDiv.appendChild(btn);
        }
    });
}
renderShipButtons();


socket.onopen = () => {
    console.log('Connected to server');
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received from server:', data);
    switch (data.type) {
        case 'connected':
            status.textContent = `Ви гравець ${data.player}. Розставте свої кораблі!`;
            break;
        case 'start':
            isSetupPhase = false;
            myTurn = data.turn;
            status.textContent = myTurn ? 'Ваш хід!' : 'Чекайте хід суперника';
            shipControls.style.display = 'none';
            break;
        case 'shot':
            handleOpponentShot(data.x, data.y);
            break;
        case 'result':
            updateOpponentBoard(data.x, data.y, data.hit);
            break;
        case 'turnUpdate':
            myTurn = data.turn;
            status.textContent = myTurn ? 'Ваш хід!' : 'Чекайте хід суперника';
            break;
        case 'gameOver':
            status.textContent = 'Гра завершена!';
            showRestartButton();
            break;
        case 'restart':
            resetGame();
            break;
    }
};

function createBoard(board) { // Створення поля 10x10
    board.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        board.appendChild(cell);
    }
}
createBoard(playerBoard);
createBoard(opponentBoard);

// розстановка кораблів
playerBoard.addEventListener('click', (e) => {
    if (!isSetupPhase) return;
    if (!selectedShip) return; // користувач не вибрав корабель
    const cell = e.target;
    const index = parseInt(cell.dataset.index);
    const orientation = document.querySelector('input[name="orientation"]:checked').value; // "horizontal" або "vertical"
    const row = Math.floor(index / 10);
    const col = index % 10;
    const shipSize = selectedShip.size;
    let shipCells = [];

    if (orientation === 'horizontal') {
        if (col + shipSize > 10) {
            status.textContent = 'Корабель не вміщається по горизонталі';
            return;
        }
        for (let i = 0; i < shipSize; i++) {
            shipCells.push(row * 10 + (col + i));
        }
    } else { // vertical
        if (row + shipSize > 10) {
            status.textContent = 'Корабель не вміщається по вертикалі';
            return;
        }
        for (let i = 0; i < shipSize; i++) {
            shipCells.push((row + i) * 10 + col);
        }
    }

    for (let idx of shipCells) {
        if (playerShipCells.has(idx.toString())) {
            status.textContent = 'Перетин з іншим кораблем!';
            return;
        }
    }
    // Розташування корабля: позначаємо клітинки класом та додаємо їх до множини
    shipCells.forEach(idx => {
        playerBoard.children[idx].classList.add('ship');
        playerShipCells.add(idx.toString());
    });

    availableShips[selectedShip.index].count--; // зменшуємо кількість кораблів
    selectedShip = null;
    renderShipButtons();
    status.textContent = 'Корабель розміщено.';

    const allPlaced = availableShips.every(ship => ship.count === 0);
    if (allPlaced) {
        isSetupPhase = false;
        socket.send(JSON.stringify({ type: 'ready' }));
        status.textContent = 'Очікування готовності суперника...';
    }
});

// Стрільба по полю суперника
opponentBoard.addEventListener('click', (e) => {
    if (!myTurn || isSetupPhase) return;
    const index = e.target.dataset.index;
    const x = Math.floor(index / 10);
    const y = index % 10;
    socket.send(JSON.stringify({ type: 'shot', x, y }));
    myTurn = false;
    status.textContent = 'Чекайте хід суперника';
});

// Обробка пострілу супротивника
function handleOpponentShot(x, y) {
    const index = x * 10 + y;
    const cell = playerBoard.children[index];
    const hit = playerShipCells.has(index.toString());
    (hit) ? cell.classList.add('hit') : cell.classList.add('miss');

    socket.send(JSON.stringify({ type: 'result', x, y, hit }));
    if (hit) checkPlayerDefeat();

}

function updateOpponentBoard(x, y, hit) {
    const index = x * 10 + y;
    const cell = opponentBoard.children[index];
    (hit) ? cell.classList.add('hit') : cell.classList.add('miss');
    if (hit) checkOpponentDefeat();

}

// Перевірка, чи всі клітинки кораблів гравця пошкоджені
function checkPlayerDefeat() {
    let allHit = true;
    playerShipCells.forEach(idx => {
        if (!playerBoard.children[idx].classList.contains('hit')) {
            allHit = false;
        }
    });
    if (allHit && playerShipCells.size > 0) {
        status.textContent = 'Ви програли!';
        socket.send(JSON.stringify({ type: 'gameOver' }));
        showRestartButton();
    }
}

// Перевірка перемоги (припускаємо, що сумарна кількість клітинок кораблів = 20)
function checkOpponentDefeat() {
    const hitCells = opponentBoard.querySelectorAll('.hit').length;
    if (hitCells >= 20) {
        status.textContent = 'Ви перемогли!';
        socket.send(JSON.stringify({ type: 'gameOver' }));
        showRestartButton();
    }
}

function showRestartButton() {
    let restartBtn = document.getElementById('restart-button');
    if (!restartBtn) {
        restartBtn = document.createElement('button');
        restartBtn.id = 'restart-button';
        restartBtn.textContent = 'Зіграти знову';
        document.body.appendChild(restartBtn);
        restartBtn.addEventListener('click', () => {
            socket.send(JSON.stringify({ type: 'restart' }));
            resetGame();
        });
    }
    restartBtn.style.display = 'block';
}

function hideRestartButton() {
    const restartBtn = document.getElementById('restart-button');
    if (restartBtn) {
        restartBtn.style.display = 'none';
    }
}

function resetGame() {
    createBoard(playerBoard);
    createBoard(opponentBoard);
    playerShipCells.clear();
    isSetupPhase = true;
    myTurn = false;
    initAvailableShips();
    renderShipButtons();
    shipControls.style.display = 'block';
    status.textContent = 'Розставте свої кораблі!';
    hideRestartButton();
}
