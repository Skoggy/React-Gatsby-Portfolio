import { createGlobalStyle } from 'styled-components';
import bg from '../images/bg.png';


const GlobalStyles = createGlobalStyle`

:root {
    
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