import React, {useState} from 'react'
import {
  Input,
  Box,
} from "@chakra-ui/react";
export const Child3 = (props) => {

  const updateState = (e, name) => {
    props.setParent((prevState) => ({...prevState, [name]: e.target.value}))
  }

  return (
    <>
      <Input type="text" name='hoge' placeholder='hoge' onChange={(e) => updateState(e, "hoge")}/>
      <Input type="text" name='foo' placeholder='foo' onChange={(e) => updateState(e, "foo")}/>
    </>
  )
}
