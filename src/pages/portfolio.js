import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function PortfolioPage({ data }) {
    const projects = data.projects.nodes
    console.log(projects)
    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <Link to={`/portfolio/${project.slug.current}`}>
                        <h2>
                            <span> {project.name}</span>
                        </h2>
                    </Link>
                    <Img fluid={project.image.asset.fluid} alt={project.name} />
                    <p className="description">{project.description}</p>
                    <a href={project.githubURL}>GithubURL</a>
                    <a href={project.deployedURL}>Deployed URL</a>
                </div>
            ))}
        </div>
    )
}

export const query =
    graphql`
query {
  projects: allSanityProject {
    nodes {
      name
      id
      slug {
        current
      }
      description
      image {
          asset {
            fluid(maxWidth: 410) {
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

