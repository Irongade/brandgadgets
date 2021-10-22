// import '../styles/globals.css'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  // cursor: none; 
}
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
body {
  font-family: Inter, sans-serif;
  background: '#E5E5E5';
  overscroll-behavior: none;
  overflow-x: hidden;

  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy/Gilroy-Bold.woff");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy/Gilroy-Medium.woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
}
`


const theme = {
  colors: {
    white: "#fff",
    background: '#E5E5E5',
    lightGrey: '#F7F7F7',
    lightGrayishBlue: '#E2E7EE',
    orange: '#FD9941',
    lightOrange: '#FEE5CD',
    teal: '#D2F9F7',
    lightGreen: '#26CAC1',
    darkGreen: '#12625A',
  },
  fontSizes: {
    xs: '.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.5rem',
    xxl: '2rem',
    h1: '4rem',
    h2: '3.5rem'
  },
  textColor: {
    white: '',
    darkCyanBlue: '#252F3C',
    mediumCyanBlue: '#42556D'
  },
  sizes: {
    tiny: '.5rem',
    small: '.75rem',
    medium: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '1.75rem',
    huge: '2rem',
    xhuge: '2.5rem'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
  
}

export default MyApp
