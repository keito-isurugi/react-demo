import {
  NavLink,
} from "react-router-dom";
import styled from "@emotion/styled";
import "./router.css";
import Box from '@mui/material/Box';

export const MuiHeader = () => {
  return (
    <Box sx={{ border: 1, m: 3, p: 3 }}>
      <SNavLink to="/mui">mui</SNavLink>
    </Box>
  );
};

const SNavLink = styled(NavLink)`
  font-weight: bold;
  margin: 10px;
  padding: 8px;
  height: 25px;
`;
