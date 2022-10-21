import React from 'react'
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'

export const ReactHookForm = () => {
  const data = [
    {id:1, name: 'aaa'},
    {id:2, name: 'bbb'},
    {id:3, name: 'ccc'}
  ]
  const { register, control, handleSubmit, reset, watch, formState: { errors, isSubmitting }, } = useForm({
    defaultValues: { test: data }
  });
  // const {
  //   fields,
  //   append,
  //   prepend,
  //   remove,
  //   swap,
  //   move,
  //   insert,
  //   replace
  // } = useFieldArray(
  //   {
  //     // control,
  //     // defaultValues: test
  // }
  // );

  function loginonSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }
  function onSubmit(values) {
    console.log(isSubmitting)
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        console.log(isSubmitting)
      }, 3000)
    })
  }
  return (
    <>
    {/* ログイン */}
      {/* <form onSubmit={handleSubmit(loginonSubmit)}>
        <FormControl isInvalid={errors.account}>
          <FormLabel htmlFor='account'>アカウント</FormLabel>
          <Input
            id='account'
            placeholder='アカウント'
            {...register('account', {
              required: '入力してください',
              minLength: { value: 4, message: '4文字以上で入力してください' },
            })}
          />
          <FormErrorMessage>
            {errors.account && errors.account.message}
          </FormErrorMessage>
          <FormLabel htmlFor='password'>パスワード</FormLabel>
          <Input
            id='password'
            type="password"
            placeholder='パスワード'
            {...register('password', {
              required: '入力してください',
              minLength: { value: 4, message: '4文字以上で入力してください' },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          ログイン
        </Button>
      </form> */}
    {/* ネストしたデータを送信 */}
      <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('test.0.id')} />
          <Input {...register('test.0.name')} />
          <Input {...register('test.1.id')} />
          <Input {...register('test.1.name')} />
          {/* <Input {...register('test.2.id')} />
          <Input {...register('test.2.name')} /> */}
        <Button mt={4} colorScheme='teal' isLoading={true} type='submit'>
          送信
        </Button>
      </form>
    </>
  )
}
