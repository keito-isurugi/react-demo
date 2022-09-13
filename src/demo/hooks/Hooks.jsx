import React, { useState } from "react";

import { Box, Text, Button } from "@chakra-ui/react";

import { useHooksDemo } from "./useHooksDemo";

// const [num, setNum] = useState(1);
// const changeNumState = (isState) => {
//   setNum(isState)
// }

export const Hooks = () => {
  const [count, { incrementCount, decrementCount }] = useHooksDemo();

  return (
    <div>
      <p>{count}</p>
      <Button onClick={incrementCount}>+1</Button>
      <br />
      <Button onClick={decrementCount}>-1</Button>
      {/* <p>num:{num}</p> */}
    </div>
  );
};
