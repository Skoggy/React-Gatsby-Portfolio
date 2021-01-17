import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Footer from './Footer';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles'
import bg from '../images/bg.png';


// import GlobalStyles from '../styles/GlobalStyles';
// import Typography from '../styles/Typography';



const ContentStyles = styled.div`
 
 
`;

export default function Layout({ children }) {
    return (
        <>

            <GlobalStyles />
            {/* <Typography /> */}
            <ContentStyles>
                <Nav />
                {children}
                <Footer />
            </ContentStyles>


        </>
    );
}
