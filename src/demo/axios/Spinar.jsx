import React from 'react'
import { Oval } from 'react-loader-spinner'
import { Box } from "@chakra-ui/react";
export const Spinar = () => {
  const color = "aqua"
  return (
    <>
    <Box bg="rgba(0, 0, 0, 0.5)" h="100vh" w="100vw" position="absolute" top={0} left={0} p={0} display="flex" flexDirection="column">

      <Box flexGrow="1" display="flex" flexDirection="column">
      <Oval
          height={80}
          width={80}
          color={color}
          wrapperStyle={{
              flexGrow: "1",
              justifyContent: "center",
              alignItems: "center",
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor={color}
          strokeWidth={2}
          strokeWidthSecondary={2}
      />
  </Box>
    </Box>
    </>
  )
}
