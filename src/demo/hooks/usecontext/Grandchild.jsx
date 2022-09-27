import React, { useContext } from "react";
import { SampleContext } from "./BigParent";

export const Grandchild = () => {
  // 6, useContextの引数にApp.jsxで定義したSampleContextを渡す。
  // valueに入れた値を取り出すことができる
  const [sampleContext, setSampleContext] = useContext(SampleContext);

  // 7, バケツリレーしなくても親要素のstateを変更することができる
  const changeText = () => {
    setSampleContext(123123);
  };
  return (
    <>
      {/* contextの値を画面に出力する。 */}
      <p>{sampleContext}aaa</p>
      <button onClick={changeText}>change text button</button>
    </>
  );
};
