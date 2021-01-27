import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';

import Footer from '../src/components/Footer';
import Form from '../src/components/Form';
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
    const router = useRouter();
    const [name, setName] = React.useState('');
  return (
    <>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <Form
                onSubmit={
                    (infosDoEvento) => {
                        infosDoEvento.preventDefault();
                        router.push(`/quiz?name=${name}`);
                        console.log("Fazendo uma submissão por meio do react");
                }}>
                  <Form.Input
                    onChange={(infosDoEvento) => {
                        console.log(infosDoEvento.target.value);
                        //State
                        setName(infosDoEvento.target.value);
                    }}
                    placeholder="Diz aí seu nome :)"
                  />
                  <Form.Button
                    type="submit"
                    disabled={name.length === 0}
                  >
                    Jogar {name}
                  </Form.Button>
              </Form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/beasousa2/starwars-quiz-app" />
      </QuizBackground>
    </>
  );
}
