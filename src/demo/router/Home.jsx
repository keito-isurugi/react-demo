import { COLORS } from '../../constants.js'

export const Home = () => {
  
  const str = 'Hello'
  const num = 123

  const params = ([
    ["name", "name"],
    ["capacity", "capacity"],
    ["truck_kind", "truck_kind"],
    ["truck_image", "truck_image"],
    ["use_flg", "use_flg"],
]);
params.map((p, index) => console.log(p[0], index))

  return (
    <>
      <h1>Home</h1>
      <h1>文字列をNumber型に変換</h1>
      <span>{str}</span><span>：{typeof(str)}</span><br/>
      <span>{str}</span><span>：Numberに変換→{Number(str)}</span><br/>
      <span>{num}</span><span>：{typeof(num)}</span><br/>
      <span>{num}</span><span>：Stringに変換→{String(num)}</span><br/>
      <span>Number("Hello") === "NaN" ? "true": "false"</span><span>→{Number("Hello") === "NaN" ? "true": "false"}</span><br/>
      <span>→必ずfalseが返される</span><br/>
      <span>isNaN(Number("Hello")) ? "true": "false"</span><span>→{isNaN(Number("Hello")) ? "true": "false"}</span><br/>
      <span>→isNaNを使うとNaNを条件分岐に使える</span><br/>
      <span>isNaN(Number(123)) ? "true": "false"</span><span>→{isNaN(Number(123)) ? "true": "false"}</span><br/>
      <span>→数値だとfalseが返される</span><br/>
      <h1>環境変数</h1>
      <p>{COLORS.SUB_BUTTON}</p>
      <h1>key, value</h1>
      {params.map((index) => <h1>index</h1>)}
    </>
  );
};
