import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Footer from './Footer';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles'
import bg from '../images/bg.png';


// import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background-size:150em;
  padding: 5px;
  padding: clamp(5px, 1vh, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);

  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;


const ContentStyles = styled.div`
 
 
`;

export default function Layout({ children }) {
    return (
        <>

            <GlobalStyles />
            <Typography />
            <Nav />
            <SiteBorderStyles>
                {children}
            </SiteBorderStyles>
            <Footer />


        </>
    );
}
