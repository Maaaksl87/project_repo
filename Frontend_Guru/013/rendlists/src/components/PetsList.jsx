import React from "react";

function PetsList() {
  const pets = [
    { id: 1, name: "Tiger", species: "Panthera tigris" },
    { id: 2, name: "Giraffe", species: "Giraffa camelopardalis" },
    { id: 3, name: "Zebra", species: "Equus quagga" },
  ];
  const petList = pets.map((pet) => (
    <li key={pet.id}>
      <strong>{pet.name}</strong> have <strong>{pet.species}</strong> species
    </li>
  ));
  return (
    <div>
      <h2>Pets list</h2>
      {petList}
    </div>
  );
}

export default PetsList;
