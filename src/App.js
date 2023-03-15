
//import { useState } from 'react';
import './App.css';
import QuizFooter from './components/QuizFooter';
import QuizNavMenu from './components/QuizNavMenu';
import QuizList from './pages/QuizList';

function App() {

  return (
    <div className="App">
      <QuizNavMenu />
      <QuizList />
      <QuizFooter />
    </div>
  );
}

export default App;
