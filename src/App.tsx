import React from "react";
import Router from "../src/Components/Router";
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    // font-family: 'Nanum Myeongjo', serif;
    }
`;

const App: React.FunctionComponent = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <Router />
  </>
);
export default App;