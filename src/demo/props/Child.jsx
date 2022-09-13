import React, {useState} from 'react'
import {
  Input,
  Box,
} from "@chakra-ui/react";
export const Child = (props) => {

  const updateState = (e) => {
    props.setParent(e.target.value)
  }

  return (
    <>
      <Input type="text" name='hoge' placeholder='hoge' onChange={(e) => updateState(e)}/>
      {/* <Input type="text" name='foo' placeholder='foo' onChange={(e) => updateState(e, "foo")}/> */}
    </>
  )
}
