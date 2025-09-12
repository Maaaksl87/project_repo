export default function NestedLists() {
  const items = [
    { id: 1, name: "Beverages", products: ["Tea", "Coffee", "Juice"] },
    { id: 2, name: "Snacks", products: ["Chips", "Cookies", "Nuts"] },
  ];
  const listItem = items.map((item) => (
    <li key={item.id}>
      <strong>{item.name}</strong>
      <ul>
        {item.products.map((subItem) => (
          <li key={subItem}>{subItem}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <>
      <h2>Продукти та підкатегорії</h2>
      <ul>{listItem}</ul>
    </>
  );
}
