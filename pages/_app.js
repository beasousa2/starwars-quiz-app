import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Head from 'next/head';
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
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content={db.bg} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
        <title>Quiz StarWars</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
