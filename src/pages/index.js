import React from "react"
import styled from 'styled-components'


// styles
const LandingPageStyles = styled.div`
  min-height: 75vh; // height of the browser viewport
  display: flex;
  justify-content: center;
  align-items: center;
color:white;
  
`


// markup
const IndexPage = () => {
  return (
    <>

      <LandingPageStyles>

        <h1>Hi, My Name Is Chris.. I'm A Full Stack Web Developer</h1>
      </LandingPageStyles>
    </>



  )
}

export default IndexPage
