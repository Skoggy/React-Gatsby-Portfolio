import { createGlobalStyle } from 'styled-components';
import bg from '../images/bg.png';


const GlobalStyles = createGlobalStyle`

:root {
  --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
}
html {
    background-image: url(${bg});
    
    background-attachment: fixed;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 
  }
`


export default GlobalStyles;