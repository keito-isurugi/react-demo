import React, { useState, useEffect } from "react";
import { Box, Checkbox, CheckboxGroup, useCheckboxGroup } from '@chakra-ui/react'
import { UseCheckboxDemo } from "./UseChackboxDemo";
export const CheckboxDemo = () => {

  const testdata = [{
    checkbox_data: [
      { text:"道路使用許可あり", value: "road_use_permission" },
      { text:"北陸電力防護管あり", value: "hokuriku_protection_pipe" },
      { text:"NTT防護管あり", value: "ntt_protection_pipe" },
      { text:"CATV防護管あり", value: "catv_protection_pipe" },
      { text:"解体日確認しました", value: "demolition_date_confirmed" },
    ],
    db_data: {
      road_use_permission: 1,
      hokuriku_protection_pipe: 0,
      ntt_protection_pipe: 0,
      catv_protection_pipe: 0,
      demolition_date_confirmed: 1,
    }
  }]
  const [data, setData] = useState(testdata)
  // console.log(data[0].checkbox_data.map((d) => console.log(d.text, d.value)))
  console.log(data[0].db_data)
  
  const onChangeData = (e) => {
    const value = e.target.value
    const dataCp = [...data]
    // console.log(data[0].db_data)
    // console.log(dataCp[0].db_data)
    // console.log(value)
    // console.log(dataCp[0].db_data[value])
    if(e.target.checked) {
      dataCp[0].db_data[value] = 1
    } else {
      dataCp[0].db_data[value] = 0
    }
    setData(dataCp)
    // console.log(data[0])
  }


  const array = []
  data[0].checkbox_data.forEach((t,index) => {
    // console.log(data[0].db_data[t.value])
    if(data[0].db_data[t.value]){
      array.push(t.value)
    }
  });
  // console.log(array)


  return (
    <>
    <Box mb={10}>
      {/* <CheckboxGroup colorScheme='green' defaultValue={array} onChange={(value) => console.log(value)}> */}
      <CheckboxGroup colorScheme='green' defaultValue={array} >
        {data[0].checkbox_data.map((d, index) => 
          <Checkbox key={index} value={d.value} onChange={(e) => onChangeData(e)}>{d.text}</Checkbox>
        )}
      </CheckboxGroup><br />

      {/* <CheckboxGroup colorScheme='green'  onChange={(value) => console.log(value)}> */}
      <CheckboxGroup colorScheme='green'>
          <Checkbox value="1" onChange={(e) => onChangeData(e)}>aaa</Checkbox>
          <Checkbox value="2" onChange={(e) => onChangeData(e)}>bbb</Checkbox>
          <Checkbox value="3" onChange={(e) => onChangeData(e)}>ccc</Checkbox>
      </CheckboxGroup>
    </Box>

    <Box mb={10}>
      <h1>UseChackboxDemo</h1>
      <UseCheckboxDemo/>
    </Box>
    </>
  )
}
