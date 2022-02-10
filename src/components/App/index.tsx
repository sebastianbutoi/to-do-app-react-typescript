import { useState } from "react";
import List from "../List";
import Input from "../Input";
import "./style.css";

function App(): JSX.Element {
  const [list, setList] = useState<(string | never)[]>([]);

  function addItem(item: string): void {
    setList([...list, item]);
  }

  function removeItem(index: number): void {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Input add={addItem} />
      <List list={list} remove={removeItem} />
    </div>
  );
}

export default App;
