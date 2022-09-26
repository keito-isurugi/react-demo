import React from 'react'

// 関数helloをexport
export function hello(str) {
  console.log( `Hello, ${str}!` );
} // セミコロンはつけない(関数式にならないよう注意)

// 配列fooのexport
export let foo = ['bar', 'baz'];

// 定数Hogeのexport
export const Buzz = 'Buzz';

// // デフォルトエクスポート
// export default function(){
//   console.log('default exports!');
// }

export const h1 = () => {
  return (
    <h1>h1です</h1>
  )
}
export const h2 = (val) => {
  return (
    <>
      <h2>h2です</h2>
      <p>{val}</p>
    </>
  )
}