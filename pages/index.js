import styled from 'styled-components';
import Head from 'next/head';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import db from '../db.json';

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`;

export default function Home() {
  return (
      <>
      <Head>
          <title>Quiz StarWars</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
          <QuizLogo />
            <Widget>
                <Widget.Header>
                    <h1>{db.title}</h1>
                </Widget.Header>
                <Widget.Content>
                    <p>{db.description}</p>
                </Widget.Content>
            </Widget>
            <Widget>
                <Widget.Content>
                    <h1>Quizes da Galera</h1>
                    <p>Lorem ipsum dolor sit amet...</p>
                </Widget.Content>
            </Widget>
            <Footer/>
          </QuizContainer>
          <GitHubCorner projectUrl="" />
      </QuizBackground>
    </>
  );
}
