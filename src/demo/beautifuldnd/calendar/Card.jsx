import React from "react";
import {
  Box,
} from '@chakra-ui/react';

export const Card = ({ children }) => {
  return <Box bg={"blue.100"} m={2}>{children}</Box>
}