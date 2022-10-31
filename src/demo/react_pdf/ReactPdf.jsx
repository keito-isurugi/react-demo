import React from 'react'
// import {
//   Link,
// } from "react-router-dom";
import { Button, Link } from "@chakra-ui/react";


export const ReactPdf = () => {
  return (
    <>
      <Button onClick={()=>window.open('/pdf','_blank')}>PDF出力</Button>
    </>
  )
}
