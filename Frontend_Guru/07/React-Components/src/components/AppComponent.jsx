const Child = ({ text }) => {
  return <p>{text}</p>;
};

const Parent = () => {
  const message = "This is from Parent";
  return (
    <div className="\">
      <h1>this is parent</h1>
      <Child text={message} />
    </div>
  );
};

export const AppComponent = () => {
  return <Parent />;
};
