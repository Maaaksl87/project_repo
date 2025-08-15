import {FigureViewModelService} from './FigureViewModelService';
import {Figure} from '../models/Figure';

jest.mock('../models/Figure'); // Мокаємо клас Figure

describe('FigureViewModelService', () => {
  let service;

  beforeEach(() => {
    service = new FigureViewModelService();
  });

  test('toViewModel should create a Figure instance with correct data', () => {
    // Мокаємо конструктор Figure
    const mockFigureInstance = {
      id: 1,
      name: 'Коло',
      color: '#FF0000',
      geometryType: 'CIRCLE',
      size: 5,
    };

    // Очікуємо, що Figure буде викликаний з правильними параметрами
    Figure.mockImplementation(() => mockFigureInstance);

    const figureData = {
      id: 1,
      name: 'Коло',
      color: '#FF0000',
      geometryType: 'CIRCLE',
      size: 5,
    };

    const result = service.toViewModel(figureData);

    // Перевіряємо, що конструктор Figure був викликаний з правильними аргументами
    expect(Figure).toHaveBeenCalledWith(
      figureData.id,
      figureData.name,
      figureData.color,
      figureData.geometryType,
      figureData.size
    );

    // Перевіряємо, що повертається екземпляр Figure
    expect(result).toBe(mockFigureInstance);
  });

  test('toSerializedData should return correct serialized data from Figure instance', () => {
    const figureViewModel = {
      id: 1,
      name: 'Коло',
      color: '#FF0000',
      geometryType: 'CIRCLE',
      size: 5,
    };

    const result = service.toSerializedData(figureViewModel);

    // Перевіряємо, що повертається коректно серіалізований об'єкт
    expect(result).toEqual({
      id: 1,
      name: 'Коло',
      color: '#FF0000',
      geometryType: 'CIRCLE',
      size: 5,
    });
  });
});