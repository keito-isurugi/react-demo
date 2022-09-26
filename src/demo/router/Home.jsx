import React, {useState, useEffect} from 'react'
import { COLORS } from '../../constants.js'
import { Box, Text } from '@chakra-ui/react'

export const Home = () => {
  
  const str = 'Hello'
  const num = 123

// key, value
const params = ([
    ["name", "name"],
    ["capacity", "capacity"],
    ["truck_kind", "truck_kind"],
    ["truck_image", "truck_image"],
    ["use_flg", "use_flg"],
]);
// params.map((p, index) => console.log(p[0], index))

const strJson = '{"result":true, "count":42}'
const json = JSON.parse(strJson)
// console.log(strJson)
// console.log(typeof(strJson))
// console.log(json)
// console.log(typeof(json))


  return (
    <>
      <Text fontSize={30} fontWeight="bold">Home</Text>
      <Box mb={5}>
        <Text fontSize={20} fontWeight="bold">文字列をNumber型に変換</Text>
        <span>{str}</span><span>：{typeof(str)}</span><br/>
        <span>{str}</span><span>：Numberに変換→{Number(str)}</span><br/>
        <span>{num}</span><span>：{typeof(num)}</span><br/>
        <span>{num}</span><span>：Stringに変換→{String(num)}</span><br/>
        <span>Number("Hello") === "NaN" ? "true": "false"</span><span>→{Number("Hello") === "NaN" ? "true": "false"}</span><br/>
        <span>→必ずfalseが返される</span><br/>
        <span>isNaN(Number("Hello")) ? "true": "false"</span><span>→{isNaN(Number("Hello")) ? "true": "false"}</span><br/>
        <span>→isNaNを使うとNaNを条件分岐に使える</span><br/>
        <span>isNaN(Number(123)) ? "true": "false"</span><span>→{isNaN(Number(123)) ? "true": "false"}</span><br/>
        <span>→数値だとfalseが返される</span><br/>
      </Box>
      <Box mb={5}>
        <Text fontSize={20} fontWeight="bold">環境変数</Text>
        <p>{COLORS.SUB_BUTTON}</p>
      </Box>

    </>
  );
};
