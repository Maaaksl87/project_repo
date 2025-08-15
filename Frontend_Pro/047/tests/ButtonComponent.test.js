import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from '../src/ButtonComponent';

describe('ButtonComponent', () => {
    test('рендериться з правильним текстом', () => {
        render(<ButtonComponent />);

        const buttonElement = screen.getByRole('button', { name: /Click me!/i });
        expect(buttonElement).toBeInTheDocument(); //перевіряємо наявність кнопки
        expect(buttonElement).toHaveTextContent('Click me!'); //перевіряємо текст кнопки
    });

    test('викликає функцію onClick після кліку', () => {
        const handleClick = jest.fn();// мокаємо функцію щоб її можна було перевірити
        render(<ButtonComponent onClick={handleClick} />);
        const buttonElement = screen.getByRole('button', { name: /Click me!/i });

        fireEvent.click(buttonElement);//симулюємо клік по кнопці

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
