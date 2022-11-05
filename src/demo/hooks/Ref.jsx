import React, { useRef } from "react";

import { Button } from "@chakra-ui/react";

export const Ref = () => {
  const inputElement = useRef(null);
  const doClick = () => {
    // inputElement.currentで <input type="text" /> を参照できる。
    inputElement.current.focus();
    console.log("inputElement", inputElement.current.id);
  };

  const testString = useRef("Hello !");
  console.log(testString)

  const count = useRef(0); // countの初期値は0
  const onClickCountUp = () => {
     count.current = count.current + 1; // countの値を１つ増やす
    console.log(count.current);
  }

  const isLoading = useRef(false)
  const onClick = () => {
    isLoading
  }

  return (
    <>
      <h1>useRef Demo</h1>
      <input type="text" ref={inputElement} placeholder="input" id="hoge" />
      <Button onClick={doClick}>入力欄をフォーカスする</Button>
      <div className="line"></div>

      <h1>useRefでカウントアップ</h1>
        <Button onClick={onClickCountUp}>カウントアップ</Button>
      <p>count: {count.current}</p>
      <p>※値の増減はコンソールで確認できます</p>

      <h1>useRefでtrue, false</h1>
        <Button onClick={onClickCountUp}>true, false切り替え</Button>
      <p>count: {isLoading.current}</p>
    </>
  );
};
