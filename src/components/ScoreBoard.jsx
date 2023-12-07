import React, { useState }from 'react';
import './QuestionsWidget.css';
import './QuestionsWidget.jsx';
import questions from "../questions.js";
import QuestionsWidget from './QuestionsWidget.jsx';


function ScoreBoard(props) {

  let theme = props.theme;            //current theme
  let toggleTheme =props.toggleTheme; //function to toggleTheme

  let totalQuestions = questions.length; 

  let score = props.score;           //player's score
  let [restart, setRestart] = useState(false);


  let OnRestart = () => {
    setRestart(true);
  }
  if (restart) {
    return <QuestionsWidget />;
  }      //function to restart quiz

  return (
      <div id='main'>
        <div className='question-modal'>
          <div className='heal'>
            <span>Kalvium</span>
            <button className='toggle-btn' onClick={toggleTheme}>{theme ? 'DARK' : 'LIGHT'} </button>
          </div>
          <div id='head'>Well Played!!</div>
        </div>  
        <div id='result-box'>
          <h2>Final result</h2>
          <div className='box'>{score} out of {totalQuestions} correct - {(score/totalQuestions)*100}% </div>  
          <button id='restart' onClick={OnRestart}>Restart</button>
        </div>
      </div>
  );
}

export default ScoreBoard;
