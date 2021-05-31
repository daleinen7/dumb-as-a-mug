exports.createPages = async ({ actions, graphql }) => {
  
  const {data} = await graphql(`
    query AllComics {
      allDatoCmsComic {
        nodes {
          comic {
            gatsbyImageData(
              width: 600,
              placeholder: BLURRED
            )
          }
          id
          title
          rolloverText
          post
        }
      }
    }
  `)
  data.allDatoCmsComic.nodes.forEach((node, idx) => {
    console.log(data);
    actions.createPage({
      path: `/${idx}`,
      component: require.resolve(`./src/templates/comicPage.jsx`),
      context: {pageContext: node}
    })
  })
}