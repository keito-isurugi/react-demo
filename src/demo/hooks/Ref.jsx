import React, { useRef } from "react"

export const Ref = () => {
  const inputElement = useRef(null);
  const doClick = () => {
    // inputElement.currentで <input type="text" /> を参照できる。
    inputElement.current.focus();
    console.log('inputElement', inputElement.current.id);
  }

  return (
    <>
      <h1>useRef Demo</h1>
      <input type="text" ref={inputElement} placeholder="input" id="hoge"/>
      <button onClick={ doClick }>入力欄をフォーカスする</button>
      <div className="line"></div>
    </>
  )
}