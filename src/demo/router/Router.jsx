import { BrowserRouter, Route, Routes, Link, NavLink, useResolvedPath, useMatch, useNavigate, Outlet } from "react-router-dom"

import { Home } from "./Home"
import { About } from "./About"
import { Dropzone } from '../dropzone/Dropzone'
import { Pagination } from '../pagination/Pagination'
import { ChakraResponsive } from '../chakra/ChakraResponsive'

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dropzone" element={<Dropzone />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/chakra_responsive" element={<ChakraResponsive />} />
      </Routes>
    </>
  )
}