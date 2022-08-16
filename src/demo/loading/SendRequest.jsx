import React, { useState } from "react";
import { ShowData } from "./ShowData";
import { Loading } from "./Loading";
import axios from "axios";
import {
  Button
} from '@chakra-ui/react';

// import { getAPI } from "../axiosGetAPI";

export const SendRequest = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ resData, setResData ] = useState(null);

  const submitToBack = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
      setResData(res.data);
      setIsLoading(false);
    }).catch(error => {
      console.log(error);
      setIsLoading(false);
    })
  }

  return (
    <>
      <div>
        <Button onClick={submitToBack} >データを取得する</Button>
        { isLoading ? <Loading /> : < ShowData data={resData}/> }
      </div>
    </>
  );
};
