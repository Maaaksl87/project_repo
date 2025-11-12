import React from "react";
import Book from "./Book";

interface BookData {
  id: number;
  title: string;
  author: string;
}

interface BookListProps {
  books: BookData[];
}

function BookList({ books }: BookListProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Список книг</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
