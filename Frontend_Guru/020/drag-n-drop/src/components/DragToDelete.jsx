import React, { useState } from "react";

export default function DragToDelete() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1", deleted: false },
    { id: 2, text: "Item 2", deleted: false },
    { id: 3, text: "Item 3", deleted: false },
  ]);

  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = () => {
    if (dragIndex === null) return;

    setItems((prev) =>
      prev.map((item, idx) =>
        idx === dragIndex ? { ...item, deleted: true } : item
      ).filter((item, idx) => idx !== dragIndex)
    );

    setDragIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 flex flex-col gap-6 w-full max-w-md mx-auto ">
      <div className="flex flex-col gap-2 text-gray-500">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            className={`p-3 rounded-xl cursor-move shadow border transition-colors ${
              item.deleted ? "bg-red-400" : "bg-gray-200"
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="h-24 rounded-xl border-2 border-dashed flex items-center justify-center text-gray-600"
      >
        Drop here to delete
      </div>
    </div>
  );
}
