import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import Form from '../src/components/Form';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Carregando pergunta]
      </Widget.Content>
    </Widget>
  );
};

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit }) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
    <Widget.Header>

      {/* <BackLinkArrow href="/" */}
      <h3>
        {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      </h3>
    </Widget.Header>
    <img
      alt="Descrição"
      style={{
        width: '100%',
        height: '150px',
        objectFit: 'cover',
      }}
      src={question.image}
    />
    <Widget.Content>
      <h2>
        {question.title}
      </h2>
      <p>
        {question.dificult}
      </p>

      <Form onSubmit={(eventInfos) => {
        eventInfos.preventDefault();
        onSubmit();
      }} >
        {question.alternatives.map((alternative, alternativeIndex) => {
          const alternativeId = `alternative__${alternativeIndex}`;
          return (
            <Widget.Topic as="label" htmlFor={alternativeId}>
              <input
                style={{display: 'none'}}
                id={alternativeId}
                type="radio"
                name={questionId}/>
              {alternative}
            </Widget.Topic>);
        })}
        <Button type="submit"> Confirmar </Button>
      </Form>
    </Widget.Content>
  </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
};

/**
 * [React chamda de: Efeitos || Efects]
 * nasceu = didMount
 * vai atualizar = willUpdate
 * vai morrer = willUnmount
 */

export default function QuizPage() {
  const [pageState, setPageState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const questionIndex = currentIndex;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setPageState(screenStates.QUIZ);
    }, 5000);
  }, []);

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if(nextQuestion < totalQuestions) {
      setCurrentIndex(questionIndex + 1);
    } else {
      setPageState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {pageState === screenStates.QUIZ && (
          <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
          />
        )}
        {pageState === screenStates.LOADING && <LoadingWidget/> }

        {pageState === screenStates.RESULT && <div>Vc acertou x questões!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
