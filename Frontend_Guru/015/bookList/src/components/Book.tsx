import React from "react";

function Book({title, author}: {title: string; author: string}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">Автор: {author}</p>
    </div>
  );
}

export default Book;
