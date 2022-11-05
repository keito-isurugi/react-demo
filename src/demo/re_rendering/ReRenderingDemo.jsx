import React, {useState, useEffect} from 'react'

import {
  Button,
  Text,
  Box
} from '@chakra-ui/react'
import { Parents as Sample1 } from './sample1/Parents'

export const ReRenderingDemo = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const array = [...Array(100)].map((_, i) => i)
    setData(array)
  }, [])

  const dataChange = () => {
    const array = [...Array(100)].map((_, i) => i + 700)
    setData(array)
  } 
  const dataInitial = () => {
    const array = [...Array(100)].map((_, i) => i)
    setData(array)
  } 
  return (
    <>
      <Button onClick={() => {dataChange()}}>データ入れ替え</Button>
      <Button onClick={() => {dataInitial()}}>データ初期化</Button>
      <Box m={5}>
        <Text>レンダリングsample1</Text>
        <Sample1 data={data}/>
      </Box>
      <Text>レンダリングsample2</Text>

    </>
  )
}
