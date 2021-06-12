import * as React from "react"
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { navigate } from "gatsby";

const StyledParagraph = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #525029;

  a {
    color: #4f4a00; 
    text-decoration: underline;
  }
`;

const IndexPage = ({location}) => {
  return (
    <Layout  location={location}>
      <StyledParagraph>Dumb as a Mug is a webcomic that ran from 2011-2012 by <a href="https://namorrison7.wixsite.com/mysite/home">Neal Morrison</a>. <Link to='/0'>Start At the Beginning!</Link></StyledParagraph>
    </Layout>
  )
}

export default IndexPage