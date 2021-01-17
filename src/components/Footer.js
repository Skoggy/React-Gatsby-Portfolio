import React from 'react';
import styled from 'styled-components'

const FooterStyles = styled.footer`
display:flex;
justify-content:center;
color:white;
`

export default function Footer() {
    return (
        <FooterStyles>
            <p>&copy; Christopher Skogstad {new Date().getFullYear()}</p>
        </FooterStyles>
    );
}
