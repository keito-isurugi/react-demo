import React from 'react'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'


export const ReactHookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  )
}
