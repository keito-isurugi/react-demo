import React from "react";

import {
  Box
} from '@chakra-ui/react'
import { LoadingDemo } from "./LoadingDemo";
import { LoadingSpinnerDemo } from "./LoadingSpinnerDemo";


export const LoadingDemoPage = () => {

  return (
    <Box display="flex" gap={20}>
      <Box border={1} borderColor="#000">
        <h1>react-loading</h1>
        <LoadingDemo/>
      </Box>
      <Box border={1} borderColor="#000">
        <h1>react-loader-spinner</h1>
        <LoadingSpinnerDemo/>
      </Box>
    </Box>
  );
};
