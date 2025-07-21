const http = require('http');

let pizzaStatus = [
    "Замовлення прийнято",
    "Приготування піци",
    "Піца вийшла з печі",
    "Пфакування піци",
    "Піца доставлена",
];

const server = http.createServer((req, res) => {
    if (req.url === '/pizza') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
        });

        let lastEventId = 0;
        if (req.headers['last-event-id']) { //Перевіряється, чи є у HTTP-запиті заголовок Last-Event-ID
            lastEventId = parseInt(req.headers['last-event-id'], 10) || 0; //Якщо заголовок є, його значення перетворюється на число інакше 0
        }

        let index = lastEventId;

        const interval = setInterval(() => {
            if (index < pizzaStatus.length) {
                res.write(`id: ${index}\n`); //id для кожної події
                res.write(`data: ${pizzaStatus[index]}\n\n`);//! перевірити які будуть повідомлення без n n
                index++;
            } else {
                clearInterval(interval);
                res.write('event: close\n');
                res.write('data: завершення\n\n');
            }
        }, 2000)

        req.on('close', () => {
            clearInterval(interval);
            res.write('event: close\n');
            res.write('data: завершення\n\n');
            res.end();
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('неправильна адреса');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});