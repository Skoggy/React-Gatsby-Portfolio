import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';


export default function ProjectPage({ data }) {
  const { project } = data;

  return (
    <div>
      <Img fluid={project.image.asset.fluid} alt={project.name} />
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <a href={project.githubURL}>GithubURL</a>
        <a href={project.deployedURL}>Deployed URL</a>
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
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
      deployedURL
      githubURL
    }
  }
`;
