import {
  Route,
  Routes,
} from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";
import { DropzoneDemo } from "../dropzone/DropzoneDemo";
import { Pagination } from "../pagination/Pagination";
import { ChakraResponsive } from "../chakra/ChakraResponsive";
import { LoadingDemoPage } from "../loading/LoadingDemoPage";
import { SendRequest } from "../loading/SendRequest";
import { Map } from "../googlemap/Map";
import { TableLayout } from "../chakra/TableLayout";
import { DndTable } from "../beautifuldnd/calendar/DndTable";
import { Hooks } from "../hooks/Hooks";
import { Css } from "../css/Css";
import { ColorPicker } from "../color_picker/ColorPicker";
import { BigParent } from "../hooks/usecontext/BigParent";
import { Ref } from "../hooks/Ref";
import { Props } from "../props/Props"
import { ReRenderingDemo } from "../re_rendering/ReRenderingDemo"
import { AxiosDemo } from "../axios/AxiosDemo"
import { CheckboxDemo } from "../chakra/CheckboxDemo";
import { ImportDemo } from "../import/ImportDemo";
import { TailwindcssDemo } from "../tailwindcss/TailwindcssDemo";
import { ReactHookForm } from "../react_hook_form/ReactHookForm";
import { Scroll } from "../scroll/Scroll";
import { ReactPdf } from "../react_pdf/ReactPdf";
import MemoDemo from "../hooks/memo/MemoDemo";
import { ExceljsDemo } from "../exceljs/ExceljsDemo";
import { Progressbar } from "../progressbar/Progressbar";
import { SearchBox } from "../search_box/SearchBox";
import { DatePickerDemo } from "../date_picker/DatePickerDemo";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dropzone" element={<DropzoneDemo />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/chakra_responsive" element={<ChakraResponsive />} />
        <Route path="/loading" element={<LoadingDemoPage />} />
        <Route path="/sendrequest" element={<SendRequest />} />
        <Route path="/map" element={<Map />} />
        <Route path="/table" element={<TableLayout />} />
        <Route path="/dnd" element={<DndTable />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/css" element={<Css />} />
        <Route path="/color_picker" element={<ColorPicker />} />
        <Route path="/use_context" element={<BigParent />} />
        <Route path="/use_ref" element={<Ref />} />
        <Route path="/props" element={<Props />} />
        <Route path="/re_rendering" element={<ReRenderingDemo />} />
        <Route path="/axios" element={<AxiosDemo />} />
        <Route path="/checkbox" element={<CheckboxDemo />} />
        <Route path="/import" element={<ImportDemo />} />
        <Route path="/memo" element={<MemoDemo />} />
        <Route path="/tailwindcss" element={<TailwindcssDemo />} />
        <Route path="/react_hook_form" element={<ReactHookForm />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/react_pdf" element={<ReactPdf />} />
        <Route path="/exceljs" element={<ExceljsDemo />} />
        <Route path="/progress" element={<Progressbar />} />
        <Route path="/search_box" element={<SearchBox />} />
        <Route path="/date_picker" element={<DatePickerDemo />} />
      </Routes>
    </>
  );
};
