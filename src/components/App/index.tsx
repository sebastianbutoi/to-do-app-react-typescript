import { useState } from "react";
import List from "../List";
import Input from "../Input";
import "./style.css";

function App() {
  const [list, setList] = useState<(string | never)[]>([]);

  function addItem(item: string) {
    setList([...list, item]);
  }

  function removeItem(index: number) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }
  return (
    <div className="App">
      <h1>To do App</h1>
      <Input add={addItem} />
      <List list={list} remove={removeItem} />
    </div>
  );
}

export default App;
