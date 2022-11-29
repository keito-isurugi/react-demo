import React, {useState, useEffect, useMemo} from 'react'
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button
} from '@chakra-ui/react'
import AccountInput from './AccountInput';
import PasswordInput from './PasswordInput';
import { DatePickerComponents } from '../date_picker/components/DatePickerComponents';

export const ReactHookForm = () => {

  const data = {
    test:[
      {id:1, name: 'aaa'},
      {id:2, name: 'bbb'},
      {id:3, name: 'ccc'}
    ]
  }

  const defaultValues = useMemo(() => {
    // const dataCp = {...data}
    // console.log(data)
    // console.log(dataCp)
    // if(window.location.pathname.match(/works/)) {
    //     // tagDefaultValueName.forEach((e, index) => {
    //     //     dataCp["aaa"] = {}
    //     //     dataCp["aaa"][e] = ''
    //     // });
    //     dataCp.aaa = {}
    // }
    // console.log(dataCp)
      return data
  }, [data]);

  useEffect(() => {
    // reset({ ...defaultValues });
  }, [defaultValues]);

  const addFieldName = () => {
    alert(JSON.stringify(defaultValues))
    defaultValues["hoge"] = {}
    alert(JSON.stringify(defaultValues))
  }
  const { register, control, handleSubmit, clearErrors, reset, watch, formState: { errors, isSubmitting }, } = useForm({
    // defaultValues: { test: data }
    // defaultValues: { id: 2 }
    defaultValues
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
    // console.log(isSubmitting)
    return new Promise((resolve) => {
      // console.log(isSubmitting)
      // axios
      // .get("https://jsonplaceholder.typicode.com/photos")
      // .then((res) => {
      //   console.log(isSubmitting)
      //   // setResData(res.data);
      //   // setIsLoading(false);
      //   resolve()
      // })
      // .catch((error) => {
      //   console.log(error);
      //   setIsLoading(false);
      // });
      setTimeout(() => {
        console.log(isSubmitting)
        alert(JSON.stringify(values, null, 2))
        resolve()
        console.log(isSubmitting)
      }, 1000)
    })
  }


  function onSubmit(values) {
    console.log(isSubmitting)
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        console.log(isSubmitting)
      }, 500)
    })
  }

  const onFileSubmit = (data) => {
    console.log(data)
    alert(JSON.stringify(data))
  }

  const Options = [
    { value: 1, label: "りんご" },
    { value: 2, label: "みかん" },
    { value: 3, label: "バナナ" },
  ];

  return (
    <>
    {/* ログイン */}
      <form onSubmit={e => {clearErrors(); handleSubmit(loginonSubmit)(e)}}>

        {/* 通常 */}
        {/* <FormControl isInvalid={errors.account}>
          <FormLabel htmlFor='account'>アカウント</FormLabel>
          <Input
            id='account'
            placeholder='アカウント'
            {...register('account', {
              required: '必須項目です。',
              minLength: { value: 4, message: '4文字以上で入力してください' },
            })}
          />
          <FormErrorMessage>
            {errors.account && errors.account.message}
          </FormErrorMessage>
        </FormControl> */}

        {/* <FormControl isInvalid={errors.password}>
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
        </FormControl> */}

        {/* コンポーネント分割 */}
        {/* <AccountInput register={register} errors={errors}/>
        <PasswordInput register={register} errors={errors}/> */}

        <Controller
          control={control}
          name="sdate"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            // ヘッダーカスタムバージョン
            <DatePickerComponents 
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              dateFormat="yyyy-MM-dd"
            />
            // 通常
            // <ReactDatePicker
            //   onChange={onChange}
            //   onBlur={onBlur}
            //   selected={value}
            // />
          )}
        />
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          ログイン
        </Button>
      </form>
    {/* ネストしたデータを送信 */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('test.0.id')} />
          <Input {...register('test.0.name')} />
          <Input {...register('test.1.id')} />
          <Input {...register('test.1.name')} />
          <Input {...register('test.2.id')} />
          <Input {...register('test.2.name')} />
          <p>fieldName"hoge"追加</p>
          <Input {...register('hoge.0.age')} />
          <Input {...register('hoge.0.add')} />
          <Input {...register('hoge.1.age')} />
          <Input {...register('hoge.1.add')} />
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          送信
        </Button>
        <Button onClick={() => addFieldName()}>要素追加</Button>
      </form> */}
      {/* ファイルアップロード */}
      {/* <form onSubmit={handleSubmit(onFileSubmit)}>
        <input {...register("picture")} type="file" />
        <button>Submit</button>
      </form> */}
      {/* react-selectで使う */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <Select
              options={Options}
              value={Options.find((x) => x.value === field.value)}
              onChange={(newValue) => {
                field.onChange(newValue?.value);
              }}
            />
          )}
        />
      </div>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Submit
      </Button>
      </form> */}
    </>
  )
}
