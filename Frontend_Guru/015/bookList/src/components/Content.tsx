import React from "react";

type ContentProps = {
    children: React.ReactNode; // Вказуємо, що children можуть бути будь-якими React-вузлами
}

function Content({children}: ContentProps) {
  return <div className="flex-1">{children}</div>;
}

export default Content;
