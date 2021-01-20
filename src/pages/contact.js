import React from 'react';
import styled from 'styled-components'
import Home from '../components/ContactForm'

const ContactsStyles = styled.div`
  min-height: 50vh; // height of the browser viewport
  display: flex;
    justify-content: center;
  align-items: center;
`

const LinkStyles = styled.div`
display: flex;
justify-content:space-between;
align-items:center;

font-size: 1.5rem;
`

export default function ContactPage() {
    return (
        <div>
            <ContactsStyles>
                <Home />
            </ContactsStyles>
            <LinkStyles>
                <p>Check out my <a href="https://github.com/Skoggy">Github</a></p>
                <p>Check out my <a href="https://www.linkedin.com/in/chris-skogstad-web-dev/">LinkedIn</a></p>
                <p>Check out my <a href="https://twitter.com/Christo50385513">Twitter</a></p>
            </LinkStyles>
        </div>
    )
}

