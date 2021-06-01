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

  a {
    background: url('/DaaMBtn.png');
  }
`;

export default function Layout({location, children}) {
  const path = location.pathname.slice(1);
  console.log("This is a path", path);
  return(
    <StyledHeader>
      <GlobalStyle/>
      <h1><StaticImage src='../images/DaamHeader.png' alt='Dumb as a Mug'/></h1>
      <nav>
        <Link to='/0'>Start at the Beginning</Link>
        <Link to={`/${parseInt(path) - 1}`}>Previous</Link>
        <Link to={`/${Math.floor(Math.random() * 99)}`}>Random</Link>
        <Link to={`/${parseInt(path) + 1}`}>Next</Link>
        <Link to='/99'>Latest</Link>
      </nav>
      {children}
    </StyledHeader>
  )
}