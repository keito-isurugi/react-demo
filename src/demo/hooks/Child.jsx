import React, { useContext } from "react";

//ここでコンテキストを読み込む
import { SampleContext } from "./BigParent";
import { Box, Button } from "@chakra-ui/react";

import { Grandchild } from "./Grandchild";
console.log("孫コンポーネント")
export const Child = () => {
  // 共有しているstateを分割代入
  const {
    sampleContext,
    setSampleContext,
    switchFlag,
    setSwitchFlag,
    text, 
    setText,
    datas,
    setDatas,
  } = useContext(SampleContext);
  

  // 5, 孫コンポーネントにもpropsを渡さない
  return (
    <>
      <Box>{text}</Box>
      <Button onClick={() => setDatas({name:"tanaka", age: 26})}>setDatas</Button>
      <Button onClick={() => setText("孫コンポーネントからstate更新")}>setText</Button>
      <Box>{datas?.name}</Box>
      <Box>{datas?.age}</Box>
    </>
  );
};
