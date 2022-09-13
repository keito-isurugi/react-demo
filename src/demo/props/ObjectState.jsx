import React, {useState} from 'react'
import {
  Input,
  Box,
} from "@chakra-ui/react";
import { Child } from './Child';
import { Child2 } from './Child2';
import { Child3 } from './Child3';

export const ObjectState = () => {
  const [state, setState] = useState({})
  const [parent, setParent] = useState()
  const [parent2, setParent2] = useState([])
  const [parent3, setParent3] = useState({})

  const updateState = (e, name) => {
    setState((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  console.log(parent3)
  return (
    <>
    <Box w="30%" borderBottom='1px' borderColor="black" p={5}>
      <h1>stateにオブジェクト追加</h1>
      <Input type="text" name='name' placeholder='name' onChange={(e) => updateState(e, "name")}/>
      <Input type="text" name='password' placeholder='password' onChange={(e) => updateState(e, "password")}/>
      <Box>name:{state.name}</Box>
      <Box>password:{state.password}</Box>
    </Box>
    <Box w="30%" borderBottom='1px' borderColor="black" p={5}>
      <h1>子要素で親要素のstateを変更</h1>
      <Child setParent={setParent}/>
      <Box>{parent}</Box>
    </Box>
    <Box w="30%" borderBottom='1px' borderColor="black" p={5}>
      <h1>子要素で親要素のstateを変更(配列)</h1>
      <Child2 setParent={setParent2} parent={parent2}/>
      <Box>{parent2}</Box>
    </Box>
    <Box w="30%" borderBottom='1px' borderColor="black" p={5}>
      <h1>子要素で親要素のstateを変更(オブジェクト)</h1>
      <Child3 setParent={setParent3} parent={parent3}/>
      <Box>{parent3.hoge}</Box>
    </Box>
    </>
  )
}
