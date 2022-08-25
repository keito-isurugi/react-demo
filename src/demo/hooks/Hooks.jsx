import { useHooksDemo } from './useHooksDemo'

import {
  Box,
  Text,
  Button,
} from '@chakra-ui/react';

export const Hooks = () => {
  const [count, { incrementCount, decrementCount }] = useHooksDemo();

  return (
    <div>
      <p>{count}</p>
      <Button onClick={incrementCount}>+1</Button><br/>
      <Button onClick={decrementCount}>-1</Button>
    </div>
  );
}