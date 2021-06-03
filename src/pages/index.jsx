import * as React from "react"
import Layout from '../components/Layout';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #525029;
`;

const IndexPage = ({location}) => {
  return (
    <Layout  location={location}>
      <StyledParagraph>Dumb as a Mug is a webcomic that ran from 2011-2012.</StyledParagraph>
    </Layout>
  )
}

export default IndexPage