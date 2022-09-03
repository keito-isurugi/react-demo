import React, { useContext } from 'react';
import { SampleContext } from './BigParent';

export const Grandchild = () => {
  // useContextの引数にApp.jsxで定義したSampleContextを渡す。
  const [sampleContext, setSampleContext] = useContext(SampleContext);

  const changeText = () => {
    setSampleContext(123123)
  }
  return (
    <>
      {/* contextの値を画面に出力する。 */}
      <p>{ sampleContext }aaa</p>
      <button onClick={changeText}>change text button</button>
    </>
  )
}
