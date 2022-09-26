import React, {useState, useEffect, lazy, Suspense} from 'react'
import { Box, Text } from '@chakra-ui/react'

export const ImportDemo = () => {
  const [val, setVal] = useState()

  const MyComponent = lazy(() => import("./middleImport.jsx"));
  console.log(MyComponent)
  useEffect(() => {
    let path = "./sample.jsx";
    import(`${path}`)
        .then((obj) => {
            // 各モジュールには、引数objのプロパティからアクセスできる。
            // obj.hello('World');
            // obj.default();
            // obj.foo()
            setVal(obj.h1)
            // let aaa = obj.foo
            // console.log(aaa)
        })
  }, [])

  // const result = () =>  import("../import/Hoge.jsx")
  // .then((obj) => {
  //     return obj.h1
  // })

  // result().then((item) => {
  //   console.log(item)
  //   // successProcess(item);
  // }).catch((e) => {
  //   console.error(e);
  // });

  // console.log(val)
  // console.log(result)
  const h1 = () => {
    return (
      <Suspense fallback="loading…">
        <MyComponent />
      </Suspense>
    )
  }
  return (
    <>
      <Box mb={5}>
        <Text fontSize={20} fontWeight="bold">importdemo</Text>
        {h1()}
      </Box>
    </>
  )
}
