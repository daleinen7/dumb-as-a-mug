import React from 'react';
import {Link} from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  h1 {
    margin: 0;
    margin-bottom: -54px;
  }
`

const StyledHeader = styled.header`
  background: #F1F7FC url("/daam_background.png");
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/DaaMBtn.png');
    background-repeat: no-repeat;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: 77px;
    min-width: 140px;
  }

  a {
    padding: 1.2rem;
    display: block;
    text-decoration: none;
    color: #525029;
    &:hover {
      color: #DC7929;
    }
  }
`;

export default function Layout({location, children}) {
  const path = location.pathname.slice(1);
  console.log("This is a path", path);
  return(
    <StyledHeader>
      <GlobalStyle/>
      <h1><img src="/DaaMHeader.png" alt="Dumb As A Mug" /></h1>
      <nav>
        {
          (location.pathname === '/')
          ?
          <>
          <ul>
             <li style={{transform: 'rotate(3deg)'}}>
               <Link to='/0'>Start</Link>
             </li>
             <li style={{transform: 'rotate(-2deg)'}}>
               <Link to={`/${Math.floor(Math.random() * 99)}`}>Random</Link>
             </li>
             <li style={{transform: 'rotate(4deg)'}}>
               <Link to='/99'>Last</Link>
             </li>
          </ul>
         </>
         :
         <>
            <ul>
              <li style={{transform: 'rotate(3deg)'}}>
                <Link to='/0'>Start</Link>
              </li>
              {location.pathname !== '/1' &&
                <li style={{transform: 'rotate(-1deg)'}}>
                  <Link to={`/${parseInt(path) - 1}`}>Prev</Link>
                </li>
              }
              <li style={{transform: 'rotate(-2deg)'}}>
                <Link to={`/${Math.floor(Math.random() * 99)}`}>Random</Link>
              </li>
              {location.pathname !== '/99' &&
                <li style={{transform: 'rotate(3deg)'}}>
                  <Link to={`/${parseInt(path) + 1}`}>Next</Link>
                </li>
              }
              <li style={{transform: 'rotate(4deg)'}}>
                <Link to='/99'>Last</Link>
              </li>
            </ul>
         </>
        }
      </nav>
      {children}
    </StyledHeader>
  )
}