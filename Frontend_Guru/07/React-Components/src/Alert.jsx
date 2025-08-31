export function AlertComponent({ message, type }) {
  switch (type) {
    case "success":
      return <p style={{ backgroundColor: "green" }}>{message}</p>;
    case "error":
      return <p style={{ backgroundColor: "red" }}>{message}</p>;
    default:
      return <p style={{ backgroundColor: "grey" }}>{message}</p>;
  }
}
