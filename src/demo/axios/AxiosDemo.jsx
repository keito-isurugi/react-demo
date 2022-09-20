import React, {useState} from 'react'
import axios from 'axios'

import { Button, Box } from "@chakra-ui/react";
import { ViewData } from './ViewData';
import { Spinar } from './Spinar';

export const AxiosDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  const fetchPhotos = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const fetchComments = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const fetchCors = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:8009/api/staffs")
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Button onClick={() => {fetchPhotos()}}>写真データ取得</Button>
      <Button onClick={() => {fetchComments()}}>コメントデータ取得</Button>
      <Button onClick={() => {fetchCors()}}>CORS許可確認</Button>
      {isLoading ? <Spinar/> : <ViewData datas={datas}/>}
    </>
  )
}
