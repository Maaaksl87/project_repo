export default function ListNames() {
  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const name = names.map((n) => <li key={n}>{n}</li>);
  return (
    <>
      <h2>Names list</h2>
      <ul>{name}</ul>
    </>
  );
}
