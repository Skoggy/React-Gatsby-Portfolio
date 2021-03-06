// import dotenv from 'dotenv';
const dotenv = require('dotenv')

dotenv.config({ path: '.env' });


module.exports = {
  siteMetadata: {
    title: "Christopher's Portfolio",
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ifg2gihu",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    }

  ],
}


