import React, {useState, useEffect} from 'react'

import {
  Button,
  Text,
  Box
} from '@chakra-ui/react'

export const Parents = (props) => {
  const {data} = props
  const [isOpen, setIsOpen] = useState(false)

  console.log('hello')
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>OPEN</Button>
      <Text>isOpen：{String(isOpen)}</Text>
      <Text>data</Text>
      <Box display="flex" gap="2" w="50%">
        {data?.map((d, index) => (
          <Text key={index}>{d}</Text>
        ))}
      </Box>
    </>
  )
}
