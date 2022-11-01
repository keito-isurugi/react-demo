import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Button, Progress, Box } from "@chakra-ui/react";

import { ShowData } from "../loading/ShowData";
import { set } from 'date-fns/esm';

export const Progressbar = () => {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(false);
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchDatas = () => {
    setCount(30)
    axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      setCount(90)
      setData(res.data);
      setCount(100)
      setTimer(false)
    })
    .catch((error) => {
      console.log(error);
      setTimer(false)
    });
  }

  const submitToBack = () => {
    setTimer(true)
    fetchDatas()
  };

  // useEffect(() => {
  //   if(count >= 100) {
  //     setTimer(false)
  //   }
  // }, [count])

  // const countup = () => {
  //   setCount(count => count + 0.5);
  // }
  
  // useEffect(() => {
  //   setData('')
  //   if (timer) {
  //     const timerId = setInterval(countup, 1);
  //     return () => clearInterval(timerId);
  //   }
  // }, [timer]);

  return (
    <>
      <p>進捗：{count}</p>
      {/* {timer && <Progress value={count} />} */}
      {timer && <Progress value={count} size="sm" position="absolute" width="100%" top="0" left="0"/>}
      {/* <Box position="absolute" width="100%" top="0" left="0">
        <Progress value={count} size="sm"/>
      </Box> */}
      {/* <Progress value={count} size="sm" position="absolute" width="100%" top="0" left="0"/> */}
      <Button onClick={() => setTimer(true)}>スタート</Button>
      <Button onClick={() => setTimer(false)}>ストップ</Button>
      <Button onClick={() => setCount(100)}>MAX</Button>
      <Button onClick={() => setCount(0)}>リセット</Button>
      <Button onClick={() => submitToBack()}>データを取得する</Button>
      <ShowData data={data} />
    </>
  )
}
