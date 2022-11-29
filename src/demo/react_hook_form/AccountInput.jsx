import React from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react'
const AccountInput = (props) => {
	const {register, errors} = props

	let validations = {}
	validations.required = "必須項目です"

	const name = "account"
	return (
		<>
		<FormControl isInvalid={errors[name]}>
			<FormLabel htmlFor='account'>アカウント</FormLabel>
			<Input
					id='account'
					type="text"
					placeholder='アカウント'
					{...register(name, validations)}
				/>
			<FormErrorMessage>
				{errors[name] && errors[name].message}
			</FormErrorMessage>
		</FormControl>
		</>
	)
}

export default AccountInput
