export const StyledButton = ({ text }) => {
  const styles = {
    backgroundColor: "green",
    color: "#fff",
    with: "150px",
    height: "50px"
  };
  return <button style={styles}>{text}</button>;
};
