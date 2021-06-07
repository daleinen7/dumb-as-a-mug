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

  img {
    width: 100%;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    padding: 0;
    @media(max-width: 610px) {
      margin-top: 40px;
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('/DaaMBtn.png');
    background-repeat: no-repeat;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: -35px;
    height: 77px;
    min-width: 140px;
    @media(max-width: 680px) {
      
    }
  }

  a {
    /* padding: 1.2rem; */
    padding: 0;
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
  console.log(children);
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
               <Link to={`/${Math.floor(Math.random() * 213)}`}>Random</Link>
             </li>
             <li style={{transform: 'rotate(4deg)'}}>
               <Link to='/213'>Last</Link>
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
                <Link to={`/${Math.floor(Math.random() * 213)}`}>Random</Link>
              </li>
              {location.pathname !== '/213' &&
                <li style={{transform: 'rotate(3deg)'}}>
                  <Link to={`/${parseInt(path) + 1}`}>Next</Link>
                </li>
              }
              <li style={{transform: 'rotate(4deg)'}}>
                <Link to='/213'>Last</Link>
              </li>
            </ul>
         </>
        }
      </nav>
      {children}
    </StyledHeader>
  )
}