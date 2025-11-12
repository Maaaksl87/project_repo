import React from "react";

interface ProfileProps {
  user: { name: string; age: number; address: string };
}

function Profile({ user: { name, age, address } }: ProfileProps) {
  return (
    <aside className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg max-w-md mx-auto shadow-sm mt-6">
      <h2 className="text-2xl font-semibold text-emerald-700 mb-2">👤 Профіль користувача</h2>
      <p className="text-gray-800"><span className="font-medium text-emerald-600">Ім'я:</span> {name}</p>
      <p className="text-gray-800"><span className="font-medium text-emerald-600">Вік:</span> {age}</p>
      <p className="text-gray-700 text-sm mt-1"><span className="font-medium text-emerald-600">Адреса:</span> {address}</p>
    </aside>
  );
}

export default Profile;
