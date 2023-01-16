import React, { createContext, useState } from "react";

import { Box, Text } from '@chakra-ui/react'
import { Parent } from "./Parent";

// 1, createContextで、SapmleContextを作成する。
// SapmleContextコンポーネント内でstateを共有できる
export const SampleContext = createContext();

const SampleProvider = (props) => {
  // スイッチのState管理
  const [sampleContext, setSampleContext] = useState("★★useContextの値です★★");
  const [switchFlag, setSwitchFlag] = useState(false);
  const [text, setText] = useState('hogehoge')
  const [datas, setDatas] = useState({});
  // PropsからChildrenを取得
  const { children } = props;
  // Providerに渡すvalue値(State)を設定
  const value = {
    sampleContext,
    setSampleContext,
    switchFlag,
    setSwitchFlag,
    text, 
    setText,
    datas,
    setDatas,
  };
  // valueを設定したContext.Providerを返却する
  return (
    <SampleContext.Provider value={value}>{children}</SampleContext.Provider>
  );
};

export const BigParent = () => {
  return (
    <div>
      <Text fontSize={30} fontWeight="bold">useContextデモ</Text>
      <SampleProvider>
        <Parent />
      </SampleProvider>
    </div>
  );
};
