import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Container from './components/container/container';
import QuizGame from './components/QuizGame/QuizGame';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <QuizGame />
      </Container>
    </div>
  );
}

export default App;
