import React, { useContext } from "react";
//ここでコンテキストを読み込む
import { SampleContext } from "./BigParent";

import { Box, Button, Text } from "@chakra-ui/react";

// Childをimportする。
import { Child } from "./Child";

console.log("子コンポーネント")
export const Parent = () => {
  // 共有しているstateを分割代入
  const {text, setText, setDatas} = useContext(SampleContext);

  return (
    <>
      {/* 4, Childコンポーネントにはpropsで値を渡さない */}
      <Box mb={5}>
        <Text fontSize={20} fontWeight="bold">子コンポーネント</Text>
        <div className="line">aaaaa</div>
        <Button onClick={() => setDatas({name:"おかだ", age: 1000})}>datas更新</Button>
        <Button onClick={() => setText("foofoo")}>text更新</Button>
        <Box>{text}</Box>
      </Box>
      <Box mb={5}>
        <Text fontSize={20} fontWeight="bold">孫コンポーネント</Text>
        <Child />
      </Box>
    </>
  );
};
