import React, { useState, useEffect } from "react";
import { Box, Text, Flex, FormLabel, Checkbox, CheckboxGroup, useCheckbox, useCheckboxGroup } from '@chakra-ui/react'

export const UseCheckboxDemo = (props) => {
  const CustomCheckbox = (props) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props)

    return (
      <>
        <FormLabel
          display='flex'
          flexDirection='row'
          alignItems='center'
          gridColumnGap={2}
          maxW='40'
          bg='green.50'
          border='1px solid'
          borderColor='green.500'
          rounded='lg'
          px={3}
          py={1}
          cursor='pointer'
          {...htmlProps}
        >
          <input {...getInputProps()} hidden />
          <Flex
            alignItems='center'
            justifyContent='center'
            border='2px solid'
            borderColor='green.500'
            w={4}
            h={4}
            {...getCheckboxProps()}
          >
            {state.isChecked && <Box w={2} h={2} bg='green.500' />}
          </Flex>
          <Text color="gray.700" {...getLabelProps()}>Click me for {props.value}</Text>
        </FormLabel>
      </>
    )
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['2'],
  })
  // console.log(value)

  return (
    <Box>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      <CustomCheckbox {...getCheckboxProps({ value: '1' })} />
      <CustomCheckbox {...getCheckboxProps({ value: '2' })} />
      <CustomCheckbox {...getCheckboxProps({ value: '3' })} />
    </Box>
  )

}