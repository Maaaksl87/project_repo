import React from "react";
// Завдання 2 - Створення динамічного реакт елемента з властивостями
const DynamicElement = (props) => {
    return React.createElement('p', null, props.content)
}

export default DynamicElement;
