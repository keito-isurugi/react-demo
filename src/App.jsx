import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  useResolvedPath,
  useMatch,
  useNavigate,
  Outlet,
} from "react-router-dom";
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react";
import './input.css';

import logo from "./logo.svg";
// import './App.css';
import cssTest from "./test.module.css";
import { Sample1 } from "./demo/beautifuldnd/Sample1";
import { MultiColumns } from "./demo/beautifuldnd/MultiColumns";
import { Month } from "./demo/beautifuldnd/calendar/Month";
import { Week } from "./demo/beautifuldnd/calendar/Week";
import { Day } from "./demo/beautifuldnd/calendar/Day";
import { Pagination } from "./demo/pagination/Pagination";
import { Dropzone } from "./demo/dropzone/Dropzone";
import { ChakraResponsive } from "./demo/chakra/ChakraResponsive";
import { Header } from "./demo/router/Header";
import { Router } from "./demo/router/Router";
import { MuiHeader } from "./demo/router/MuiHeader";
import { MuiRouter } from "./demo/router/MuiRouter";

function App() {
  return (
    <>
      <h1 style={{padding: "20px", fontSize: "24px", fontWeight: "bold"}}>Chakra-ui</h1>
      <ChakraProvider>
        <BrowserRouter>
          <Box p={10}>
            <Header />
            {/* <Pagination itemsPerPage={4}/>
          <Dropzone/> */}
            {/* <h1 className={cssTest.red}>CSS TEST</h1> */}
            {/* <ChakraResponsive/> */}
            <Router />
          </Box>
        </BrowserRouter>
      </ChakraProvider>

      <h1 style={{padding: "20px", fontSize: "24px", fontWeight: "bold"}}>Mui</h1>
      <BrowserRouter>
          <MuiHeader />
          <MuiRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
