import { useState } from "react";
import "./style.css";

type Props = {
  add: (arg0: string) => void;
};

const Input = ({ add }: Props): JSX.Element => {
  const [text, setText] = useState<string>("");

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
