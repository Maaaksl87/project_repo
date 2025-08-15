import { FigureList } from "./FigureList";

describe("FigureList", () => {
    let figureList;
    let mockDeleteHandler;

    beforeEach(() => {
        mockDeleteHandler = jest.fn();
        figureList = new FigureList(mockDeleteHandler);
        document.body.appendChild(figureList.figureList); // Додаємо список фігур в DOM
    });

    afterEach(() => {
        // Чистимо DOM після кожного тесту
        document.body.innerHTML = "";
        jest.clearAllMocks();
    });

    it("should create a figure list item correctly", () => {
        const figure = {
            id: 1,
            name: "Cube",
            geometryType: "CUBE",
            size: "5",
            color: "rgb(255, 0, 0)",
        };

        const figureListItem = figureList.createFigureListItem(figure);

        // Перевіряємо, чи створений DOM-елемент містить правильні дані
        expect(figureListItem.querySelector(".figure-name").innerText).toBe(figure.name);
        expect(figureListItem.querySelector(".color-preview").style.backgroundColor).toBe(figure.color);
        expect(figureListItem.querySelector(".geometry-details").innerText).toBe(`| ${figure.geometryType} | ${figure.size}`);
        expect(figureListItem.id).toBe(String(figure.id));
    });

    it("should update the figure list with new figures", () => {
        const figures = [
            {
                id: 1,
                name: "Cube",
                geometryType: "CUBE",
                size: "5",
                color: "rgb(255, 0, 0)",
            },
            {
                id: 2,
                name: "Sphere",
                geometryType: "SPHERE",
                size: "7",
                color: "rgb(255, 0, 0)",
            },
        ];

        // Оновлюємо список фігур
        figureList.updateList(figures);

        // Перевіряємо, чи список містить правильну кількість елементів
        expect(figureList.figureListItems.length).toBe(figures.length);

        // Перевіряємо, чи дані кожного елементу відповідають фігурам
        figures.forEach((figure, index) => {
            const listItem = figureList.figureListItems[index];
            expect(listItem.querySelector(".figure-name").innerText).toBe(figure.name);
            expect(listItem.querySelector(".color-preview").style.backgroundColor).toBe(figure.color);
            expect(listItem.querySelector(".geometry-details").innerText).toBe(`| ${figure.geometryType} | ${figure.size}`);
        });
    });

    it("should call onDeleteHandler when delete button is clicked", () => {
        const figure = {
            id: 1,
            name: "Cube",
            geometryType: "CUBE",
            size: "5",
            color: "rgb(255, 0, 0)",
        };

        // Створюємо елемент списку для фігури
        const figureListItem = figureList.createFigureListItem(figure);

        // Додаємо елемент списку в DOM
        figureList.figureList.appendChild(figureListItem);

        // Симулюємо клік на кнопку видалення
        const deleteButton = figureListItem.querySelector(".delete-button");
        deleteButton.click();

        // Перевіряємо, що колбек для видалення фігури був викликаний з правильним ID
        expect(mockDeleteHandler).toHaveBeenCalledWith(figure.id);
    });

    it("should clear the list and add new figures when updateList is called", () => {
        const initialFigures = [
            {
                id: 1,
                name: "Cube",
                geometryType: "CUBE",
                size: "5",
                color: "rgb(255, 0, 0)",
            },
        ];

        // Додаємо початкові фігури
        figureList.updateList(initialFigures);

        // Перевіряємо, що спочатку є 1 елемент у списку
        expect(figureList.figureListItems.length).toBe(1);

        const newFigures = [
            {
                id: 2,
                name: "Sphere",
                geometryType: "SPHERE",
                size: "7",
                color: "rgb(255, 0, 0)",
            },
        ];

        // Оновлюємо список новими фігурами
        figureList.updateList(newFigures);

        // Перевіряємо, що тепер список містить тільки нові фігури
        expect(figureList.figureListItems.length).toBe(1);
        expect(figureList.figureListItems[0].querySelector(".figure-name").innerText).toBe("Sphere");
    });
});