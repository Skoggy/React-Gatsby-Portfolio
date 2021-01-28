import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';


const LinkStyles = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
padding-left:  6rem;
padding-right:6rem;
font-size: 2rem;
`
const DescriptionStyles = styled.div`
h2 {
  display:flex;
  font-size: 3rem;
  align-items:center;
}
p{
  font-size: 1.5rem;
}
`

// const ImageStyles = styled.image`
// max-height: 300px;
// max-width: 300px;
// `

export default function ProjectPage({ data }) {
  const { project } = data;

  return (
    <div>
      <Img fluid={project.image.asset.fluid} alt={project.name} />
      <div>
        <DescriptionStyles>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </DescriptionStyles>
        <LinkStyles>
          <a href={project.githubURL}>GithubURL</a>
          <a href={project.deployedURL}>Deployed URL</a>
        </LinkStyles>
      </div>

    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      
      name
      id
      description
      slug {
        current
      }
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      deployedURL
      githubURL
    }
  }
`;
