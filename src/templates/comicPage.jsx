import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage } from "gatsby-plugin-image";

export default function comicPage({pageContext, location}) {
  const data = pageContext.pageContext;
  return(
    <Layout location={location}>
      <h2>{data.title}</h2>
      <GatsbyImage image={data.comic.gatsbyImageData} title={data.rolloverText} alt={data.rolloverText} />
    </Layout>
  )
}