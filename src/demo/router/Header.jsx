import { BrowserRouter, Route, Routes, Link, NavLink, useResolvedPath, useMatch, useNavigate, Outlet } from "react-router-dom"
import styled from '@emotion/styled'
import './router.css'
import {
  Box
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box mb={10}>
      <SNavLink to="/home">Home</SNavLink>
      <SNavLink to="/about">About</SNavLink>
      <SNavLink to="/dropzone">Dropzone</SNavLink>
      <SNavLink to="/pagination">Pagination</SNavLink>
      <SNavLink to="/chakra_responsive">chakra_responsive</SNavLink>
      <SNavLink to="/loading">loading</SNavLink>
      <SNavLink to="/sendrequest">sendrequest</SNavLink>
      <SNavLink to="/map">map</SNavLink>
      <SNavLink to="/table">table</SNavLink>
    </Box>
  )
}

const SNavLink = styled(NavLink)`
  font-weight: bold;
  margin-right: 10px;
  padding: 10px;
`