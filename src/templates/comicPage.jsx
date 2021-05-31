import React from 'react';
import Layout from '../components/Layout';
import { GatsbyImage } from "gatsby-plugin-image";

export default function comicPage({pageContext}) {
  const data = pageContext.pageContext;
  console.log(data);
  return(
    <Layout>
      <h2>{data.title}</h2>
      <GatsbyImage image={data.comic.gatsbyImageData} title={data.rolloverText} alt={data.rolloverText} />
    </Layout>
  )
}