import React, {useState} from "react"
import {ChildArea} from "./ChildArea"

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value)
  }
  const onClickOpen = () => {
    setOpen(!open);
  }


  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  );
}
