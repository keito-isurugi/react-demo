import {
  Route,
  Routes,
} from "react-router-dom";

import { MuiDemo } from "../mui/MuiDemo";


export const MuiRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/mui" element={<MuiDemo />} />
      </Routes>
    </>
  );
};
