import { BrowserRouter, Route, Routes, Link, NavLink, useResolvedPath, useMatch, useNavigate, Outlet } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dropzone">Dropzone</Link>
      <Link to="/pagination">Pagination</Link>
      <Link to="/chakra_responsive">chakra_responsive</Link>
    </>
  )
}