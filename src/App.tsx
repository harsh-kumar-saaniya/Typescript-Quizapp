import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getQuizDetails } from './Services/quiz_service';
import { Quiz } from './Types/Quiz_types';


function App() {

  let [quiz, setQuiz] = useState<Quiz[]>([])
  useEffect(() => {
    async function fetchData() {
      const questions = await getQuizDetails(50, 'easy');
      console.log(questions)
    }
    fetchData();
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
