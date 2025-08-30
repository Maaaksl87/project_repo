import React from "react";

// Завдання 3 - Створення складного реакт елемента
const ComplexElement = () => {
  return React.createElement('div', null,
    React.createElement('h2', null, "Hello, Complex React Element"),
    React.createElement('p', null, "This is a complex element.")
  );
}

export default ComplexElement;
