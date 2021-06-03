exports.createPages = async ({ actions, graphql }) => {
  
  const {data} = await graphql(`
    query AllComics {
      allDatoCmsComic {
        nodes {
          image {
            gatsbyImageData(
              width: 600,
              placeholder: BLURRED
            )
          }
          id
          title
          rollover
          post
        }
      }
    }
  `)
  data.allDatoCmsComic.nodes.reverse().forEach((node, idx) => {
    console.log(data);
    actions.createPage({
      path: `/${idx}`,
      component: require.resolve(`./src/templates/comicPage.jsx`),
      context: {pageContext: node}
    })
  })
}