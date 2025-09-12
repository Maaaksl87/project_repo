
export default function ProductCategories() {
  const products = [
    {
      id: 1,
      name: "Technology",
      subItems: ["Computers", "Smartphones", "Wearables"],
    },
    {
      id: 2,
      name: "Home Appliances",
      subItems: ["Refrigerators", "Microwaves", "Washing Machines"],
    },
  ];
  const productsItem = products.map((item) => (
    <li key={item.id}>
      <strong>{item.name}</strong>
      <ul>
        {item.subItems.map((subItem) => (
          <li key={subItem}>{subItem}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <>
      <h2>ProductCategories</h2>
      {productsItem}
    </>
  );
}
