const items = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
];

export default function ItemList({ handleIdReturn }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => handleIdReturn(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
