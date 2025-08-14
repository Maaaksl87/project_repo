const sum = require("./sum");


describe("Тестування всіх значень", () => {
    test('Сума 1+2 має бути 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test("Тест не пройдено", () => {
        expect(sum(1, 1)).toBe(4);
    })
    test("Тест не пройдено(рядкове значення)", () => {
        expect(sum("5", "7")).toBe(5);
    })
})