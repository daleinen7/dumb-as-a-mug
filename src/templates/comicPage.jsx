import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const Header2 = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #525029;
`;

export default function comicPage({pageContext, location}) {
  const data = pageContext.pageContext;
  return(
    <Layout location={location}>
      <Header2>{data.title}</Header2>
      <GatsbyImage image={data.image.gatsbyImageData} title={data.rollover} alt={data.rollover} />
    </Layout>
  )
}