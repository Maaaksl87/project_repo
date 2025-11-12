import { useState } from "react";

function TextInputForm({ handleReceiveText }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleReceiveText(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="textInput"
        placeholder="Введіть текст"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Надіслати</button>
    </form>
  );
}

export default TextInputForm;
