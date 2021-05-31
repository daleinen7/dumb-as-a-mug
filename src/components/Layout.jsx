import React from 'react';
import {Link} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`

const StyledHeader = styled.header`
  background: #F1F7FC url("/daam_background.png");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({children}) {
  return(
    <StyledHeader>
      <GlobalStyle/>
      <h1><StaticImage src='../images/DaamHeader.png' alt='Dumb as a Mug'/></h1>
      <nav>
        <Link to='/'>Start at the Beginning</Link>
        <Link to='/'>Random</Link>
        <Link to='/'>Latest</Link>
      </nav>
      {children}
    </StyledHeader>
  )
}