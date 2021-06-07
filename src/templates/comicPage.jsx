import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const Header2 = styled.h2`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #525029;
`;

const MobileRollover = styled.div`
  display: none;
  width: 80%;
  margin-bottom: 40px;
  padding: 1em;
  @media(max-width: 750px) {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic;
    text-align: center;
    color: #525029;
    display: block;
    border-width: 1px 4px 1px 4px;
    border-color: #525029;
    border-style: solid;
    background: rgb(208, 209, 244, 0.2)
  }
`;

export default function comicPage({pageContext, location}) {
  const data = pageContext.pageContext;
  return(
    <Layout location={location}>
      <Header2>{data.title}</Header2>
      <GatsbyImage image={data.image.gatsbyImageData} title={data.rollover} alt={data.rollover} />
      <MobileRollover>
        <p>{`${data.rollover}`}</p>
      </MobileRollover>
    </Layout>
  )
}