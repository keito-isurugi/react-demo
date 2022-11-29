import React from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react'
const PasswordInput = (props) => {
	const {register, errors} = props
	return (
		<>
		<FormControl isInvalid={errors.password}>
			<FormLabel htmlFor='password'>パスワード</FormLabel>
			<Input
					id='password'
					placeholder='パスワード'
					{...register('password', {
						required: '必須項目です。',
					})}
				/>
			<FormErrorMessage>
				{errors.password && errors.password.message}
			</FormErrorMessage>
		</FormControl>
		</>
	)
}

export default PasswordInput
