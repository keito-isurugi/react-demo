import React from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  styled
} from '@chakra-ui/react';

import logo from './logo.svg';
import './App.css';
import cssTest from './test.module.css';
import { Sample1 } from './demo/beautifuldnd/Sample1'
import { MultiColumns } from './demo/beautifuldnd/MultiColumns'
import { Month } from './demo/beautifuldnd/calendar/Month'
import { Week } from './demo/beautifuldnd/calendar/Week'
import { Day } from './demo/beautifuldnd/calendar/Day'
import { Pagination } from './demo/pagination/Pagination'
import { Dropzone } from './demo/dropzone/Dropzone'
import { ChakraResponsive } from './demo/chakra/ChakraResponsive'

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Pagination itemsPerPage={4}/>
      <Dropzone/> */}
      <h1 className={cssTest.red}>CSS TEST</h1>
      <ChakraResponsive/>
    </ChakraProvider>
  );
}

export default App;
