import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "aqua"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリング");

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>child components</p>
          <button onClick={onClickClose}>close</button>
        </div>
      ) : null}
    </>
  );
});
