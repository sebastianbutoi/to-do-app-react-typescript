import { useState } from "react";

type Props = {
  add: (arg0: string) => void;
};

const Input = ({ add }: Props) => {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>To do App</h1>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="Insert here.."
      ></input>
      <button
        onClick={() => {
          add(text);
          setText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Input;
