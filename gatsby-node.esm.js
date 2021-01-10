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
}

export async function createPages(params) {
    await Promise.all([
        turnProjectsIntoPages(params)
    ])
}