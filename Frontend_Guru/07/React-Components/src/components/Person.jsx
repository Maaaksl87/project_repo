export const Person = ({ name, age, residence }) => {
  return (
    <p>
      {`Name is ${name}
      Age: ${age}
      He(Her) live in: ${residence}`}
    </p>
  );
};
