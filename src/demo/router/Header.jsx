import {
  NavLink,
} from "react-router-dom";
import styled from "@emotion/styled";
import "./router.css";
import { Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box mb={10} border="1px" height="100px">
      <SNavLink to="/home">Home</SNavLink>
      <SNavLink to="/about">About</SNavLink>
      <SNavLink to="/dropzone">Dropzone</SNavLink>
      <SNavLink to="/pagination">Pagination</SNavLink>
      <SNavLink to="/chakra_responsive">chakra_responsive</SNavLink>
      <SNavLink to="/loading">loading</SNavLink>
      <SNavLink to="/sendrequest">sendrequest</SNavLink>
      <SNavLink to="/map">GoogleMap</SNavLink>
      <SNavLink to="/table">table</SNavLink>
      <SNavLink to="/dnd">dnd</SNavLink>
      <SNavLink to="/hooks">hooks</SNavLink>
      <SNavLink to="/css">css</SNavLink>
      <SNavLink to="/color_picker">color_picker</SNavLink>
      <SNavLink to="/use_context">use_context</SNavLink>
      <SNavLink to="/use_ref">use_ref</SNavLink>
      <SNavLink to="/props">props</SNavLink>
      <SNavLink to="/re_rendering">re_rendering</SNavLink>
      <SNavLink to="/axios">axios</SNavLink>
      <SNavLink to="/checkbox">checkbox</SNavLink>
      <SNavLink to="/import">import</SNavLink>
      <SNavLink to="/memo">memo</SNavLink>
      <SNavLink to="/tailwindcss">tailwindcss</SNavLink>
      <SNavLink to="/react_hook_form">react_hook_form</SNavLink>
      <SNavLink to="/scroll">scroll</SNavLink>
      <SNavLink to="/react_pdf">react_pdf</SNavLink>
      <SNavLink to="/exceljs">exceljs</SNavLink>
      <SNavLink to="/progress">progressbar</SNavLink>
      <SNavLink to="/search_box">search_box</SNavLink>
      <SNavLink to="/date_picker">date_picker</SNavLink>
      <SNavLink to="/toggle_button">toggle_button</SNavLink>
      <SNavLink to="/react_print">react_print</SNavLink>
    </Box>
  );
};

const SNavLink = styled(NavLink)`
  font-weight: bold;
  margin: 10px;
  padding: 8px;
  height: 25px;
`;
