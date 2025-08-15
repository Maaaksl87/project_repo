// 1.Тестування асинхронної функції з використанням done()
/*  done() використовується для явного сигналу що асинхронний тест завершився
    (використовується коли тест не повертає проміс і не використовує async/await)*/

beforeEach(() => {
    jest.useFakeTimers(); // увімкнення фейкових таймерів перед кожним тестом
});

afterEach(() => {
    jest.useRealTimers(); // повертаємо реальні таймери після тесту
});

test('тест за допомогою done', (done) => {
    function fetchData(callback) {
        setTimeout(() => {
            callback('дані отримано');
        }, 1000);
    };

    fetchData(data => {
        try {
            expect(data).toBe('дані отримано');
            done();
        } catch (error) {
            done(error);
        }
    });

    jest.runAllTimers(); 
});

// 2.Тестування асинхронної функції з використанням промісів
/*  Якщо функція повертає проміс, то є 2 варіанта(без done): 
    1. Повертаємо проміс(мінус в тому що Jest чекатиме доки ця обіцянка виконається або буде відхилена)
    2. Використання .resolves / .rejects для очікування результату. */

test('Тестування асинхронної функції з використанням промісів', () => {
    function fetchPromiseData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('обіцянка виконана');
            }, 2000);
        });
    }

    const promise = fetchPromiseData();
    jest.runAllTimers(); 
    return expect(promise).resolves.toBe('обіцянка виконана');
});

// 3.Тестування з використанням async/await
/*  Сучасний спосіб, для обробки помилок використовувати try/catch або .rejects. */

test('дані отримано через async/await', async () => {
    async function getData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('дані отримано через async/await');
            }, 1500);
        });
    }

    const promise = getData();
    jest.runAllTimers(); // запускаємо всі таймери після створення промісу
    const data = await promise;
    expect(data).toBe('дані отримано через async/await');
});

// 4.Використання фейкових таймерів
test('Використання фейкових таймерів', () => {
    function delayedAction(callback) {
        setTimeout(() => {
            callback('таймер завершився');
        }, 3000);
    }

    const callback = jest.fn();
    delayedAction(callback);

    // Колбек не викликається одразу, бо таймер ще не пройшов
    expect(callback).not.toHaveBeenCalled();

    // Просунемо час на 3 секунди
    jest.advanceTimersByTime(3000);

    // Колбек викликається після того, як час минув
    expect(callback).toHaveBeenCalledWith('таймер завершився');
});

// 5.Тестування відхиленого промісу
test('Тестування відхиленого промісу', () => {
    function fetchError() {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('щось пішло не так'));
            }, 1000);
        });
    }

    const promise = fetchError();
    jest.runAllTimers(); 
    return expect(promise).rejects.toThrow('щось пішло не так');
});
