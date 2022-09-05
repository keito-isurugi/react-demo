import { BrowserRouter, Route, Routes, Link, NavLink, useResolvedPath, useMatch, useNavigate, Outlet } from "react-router-dom"

import { Home } from "./Home"
import { About } from "./About"
import { Dropzone } from '../dropzone/Dropzone'
import { Pagination } from '../pagination/Pagination'
import { ChakraResponsive } from '../chakra/ChakraResponsive'
import { Loading } from '../loading/Loading'
import { SendRequest } from '../loading/SendRequest'
import { Map } from '../googlemap/Map'
import { TableLayout } from '../chakra/TableLayout'
import { DndTable } from '../beautifuldnd/calendar/DndTable'
import { Hooks } from '../hooks/Hooks'
import { Css } from "../css/Css"
import { ColorPicker } from "../color_picker/ColorPicker"
import { BigParent } from "../hooks/BigParent"
import { Ref } from "../hooks/Ref"

export const Router = () => {
  
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dropzone" element={<Dropzone />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/chakra_responsive" element={<ChakraResponsive />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/sendrequest" element={<SendRequest />} />
        <Route path="/map" element={<Map />} />
        <Route path="/table" element={<TableLayout />} />
        <Route path="/dnd" element={<DndTable />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/css" element={<Css />} />
        <Route path="/color_picker" element={<ColorPicker />} />
        <Route path="/use_context" element={<BigParent />} />
        <Route path="/use_ref" element={<Ref />} />
      </Routes>
    </>
  )
}