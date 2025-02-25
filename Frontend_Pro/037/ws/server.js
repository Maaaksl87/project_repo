import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

let players = [];
let readyPlayers = 0;
let currentTurn = 0;
let currentShooter = null;

wss.on('connection', (ws) => {
    if (players.length < 2) {
        players.push(ws);
        ws.send(JSON.stringify({ type: 'connected', player: players.length }));
        console.log(`Гравець ${players.length} Приєднався`);
    } else {
        ws.send(JSON.stringify({ type: 'error', message: 'Гра заповнена, спробуйте пізніше' }));
        ws.close();
        return;
    }

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        console.log('Received:', data);
        const opponent = players.find(p => p !== ws);

        if (data.type === 'ready') {
            readyPlayers++;
            console.log(`Гравці готові, готових: ${readyPlayers}`);
            if (readyPlayers === 2) {
                console.log('Обидва гравця готові, гра починається');
                currentTurn = 0;
                players[0].send(JSON.stringify({ type: 'start', turn: true }));
                players[1].send(JSON.stringify({ type: 'start', turn: false }));
            }
        } else if (data.type === 'shot') {
            if (ws !== players[currentTurn]) {
                console.log('Не твій хід!');
                return;
            }
            currentShooter = ws;
            if (opponent) {
                opponent.send(JSON.stringify(data));
            }
        } else if (data.type === 'result') {
            if (!data.hit) {
                currentTurn = players.indexOf(ws);
            }
            if (currentShooter) {
                currentShooter.send(JSON.stringify(data));
            }
            players.forEach((player, idx) => {
                player.send(JSON.stringify({ type: 'turnUpdate', turn: idx === currentTurn }));
            });
            currentShooter = null;
        } else if (data.type === 'gameOver') {
            players.forEach(player => {
                player.send(JSON.stringify({ type: 'gameOver' }));
            });
        } else if (data.type === 'restart') {
            readyPlayers = 0;
            currentTurn = 0;
            currentShooter = null;
            players.forEach(player => {
                player.send(JSON.stringify({ type: 'restart' }));
            });
        } else {
            if (opponent) opponent.send(JSON.stringify(data));
        }
    });

    ws.on('close', () => {
        players = players.filter(p => p !== ws);
        readyPlayers = Math.max(0, readyPlayers - 1);
        console.log('Гравець відключився');
    });
});

console.log('WebSocket server started on ws://localhost:8080');
