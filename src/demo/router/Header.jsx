import { BrowserRouter, Route, Routes, Link, NavLink, useResolvedPath, useMatch, useNavigate, Outlet } from "react-router-dom"
import styled from '@emotion/styled'
import './router.css'

export const Header = () => {
  return (
    <>
      <SNavLink to="/home">Home</SNavLink>
      <SNavLink to="/about">About</SNavLink>
      <SNavLink to="/dropzone">Dropzone</SNavLink>
      <SNavLink to="/pagination">Pagination</SNavLink>
      <SNavLink to="/chakra_responsive">chakra_responsive</SNavLink>
    </>
  )
}

const SNavLink = styled(NavLink)`
  font-weight: bold;
  margin-right: 10px;
  padding: 10px;
`