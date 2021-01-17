import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Pagination from '../components/Pagination';


const ProjectGridStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  // grid-auto-rows: auto auto 500px;
`;


const ProjectStyles = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
   
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    text-align: center;
  }
`;

export default function PortfolioPage({ data, pageContext }) {
  const projects = data.projects.nodes
  console.log(projects)
  return (
    <>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.projects.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/portfolio"
      />
      <ProjectGridStyles>
        {projects.map((project) => (
          <ProjectStyles key={project.id}>
            <Link to={`/portfolio/${project.slug.current}`}>
              <h2>
                <span> {project.name}</span>
              </h2>
            </Link>
            <Img fluid={project.image.asset.fluid} alt={project.name} />

          </ProjectStyles>
        ))}
      </ProjectGridStyles>
    </>
  )
}

export const query =
  graphql`
query($skip: Int = 0, $pageSize: Int = 3) {
  projects: allSanityProject(limit: $pageSize, skip: $skip) {
    totalCount
    nodes {
      name
      id
      slug {
        current
      }
      description
      image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
       }
       githubURL
       deployedURL
  }
  }
}
`

