import path from 'path';
// import fetch from 'isomorphic-fetch';
// const path = require('path')

async function turnProjectsIntoPages({ graphql, actions }) {
  // Get a template for this page
  const projectTemplate = path.resolve('./src/templates/Project.js');
  // Query all pizzas
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        totalCount
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)
  console.log(data)
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      path: `/portfolio/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    })
  })
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.projects.totalCount / pageSize);
  console.log(
    `there are ${data.projects.totalCount} total projects and we have ${pageCount} pages with ${pageSize} per page`
  );
  console.log(process.env.GATSBY_PAGE_SIZE)
  // Loop from 1 to n - create the pages
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`creating page ${i}`);
    actions.createPage({
      path: `/portfolio/${i + 1}`,
      component: path.resolve('./src/pages/portfolio.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}


export async function createPages(params) {
  await Promise.all([
    turnProjectsIntoPages(params)
  ])
}