import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const NavStyles = styled.nav`
  margin-bottom: 2rem;
 
  ul {
    margin: 0;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    text-align: center;
    list-style: none;
    background: lightgrey;
  }
  
  
`;

export default function Nav() {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/about/">Who I am</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact Me</Link>
                </li>
                <li>
                    <Link to="/portfolio/">What I've Done</Link>
                </li>
            </ul>
        </NavStyles>
    );
}