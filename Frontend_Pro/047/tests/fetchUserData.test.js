const fetchUserData = require('../src/fetchUserData')
describe("Тестування двох варіантів", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Перевірка юзерів', async () => {
        //мокаємо функцію(імітуємо реальне виконання)
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve({
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                }),
            })
        );

        const userData = await fetchUserData();

        expect(userData.username).toBe("Bret");
    });

    test('Помилка', async () => {
        //мок
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
                status: 404,
                json: () => Promise.resolve({ error: 'Not found' })
            })
        );
        //перевірка що функція кидає помилку
        await expect(fetchUserData()).rejects.toThrow('HTTP error! status: 404');
    });

    test('Мережева помилка', async () => {
        //мок
        global.fetch = jest.fn(() => Promise.reject(new Error('Не вдалось підключитися :(')));

        await expect(fetchUserData()).rejects.toThrow('Не вдалось підключитися :(')
    })

})
