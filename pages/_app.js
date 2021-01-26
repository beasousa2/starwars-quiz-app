import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body {
      height: 100% !important;
    }

    body {
      display: flex;
      flex-direction: column;
      font-family: 'Lato', sans-serif;
      color: ${({ theme }) => theme.colors.contrastText};
      -webkit-font-smoothing: antialiased !important;
    }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
