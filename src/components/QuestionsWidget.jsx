import React, { useState } from "react";
import questions from "../questions.js";
import ScoreBoard from "./ScoreBoard.jsx";
import './QuestionsWidget.css'


function QuestionsWidget() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [isQuestionHighlighted, setIsQuestionHighlighted] = useState(false);



  let toggleTheme = () => {
    setTheme((theme) => !theme);       

    const body = document.querySelector('body'); 

    console.log("theme value : " + theme);
    if (theme) {                                 
      body.style.backgroundColor = '#fff' ;
      body.style.color = 'white';
      console.log("doing light theme");
    } else {
      body.style.backgroundColor = '#000000' ;
      body.style.color = 'black';
      console.log("doing dark theme");
    }

  };  

  const handleAnswerOnClick = (isAnswerCorrect) => {
		if (isAnswerCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const toggleHighlightQuestion = () => {
    setIsQuestionHighlighted((isQuestionHighlighted) => !isQuestionHighlighted);
    const questionText = document.getElementById("question");
    if(isQuestionHighlighted){
      questionText.style.color = "#e64747";
    }else{
      questionText.style.color = "#000000"
    }
  };
  
  return (
   
    <div id='main-div'> 
      {showScore ?  (
          <ScoreBoard score = {score} theme = {theme} toggleTheme = {toggleTheme}/>
      ) : (
            <div className='question-modal'>
              <div className='heal'>
                <span>Kalvium</span>
                <button className='toggle-btn' onClick={toggleTheme}>{theme ? 'DARK' : 'LIGHT'} </button>
              </div>
              <div id='head'>Welcome to the Quiz!</div>
              <div className='question-show'>
                  <h4>Question:{currentQuestion + 1} / {questions.length}</h4>
                  <h3 id='question'>{questions[currentQuestion].text} </h3> 
                  <div id='options' >
                    { questions[currentQuestion].options.map((option) => (                            
                          <button onClick ={() => handleAnswerOnClick(option.isCorrect)} key={option.id}>{option.text}</button>
                    ))}
                  </div>
                  <div className='highlight-button'>                                         
                    <button id='add-hightlight' onClick={toggleHighlightQuestion}>Highlight</button>
                    <button id='remove-highlight' onClick={toggleHighlightQuestion}>Remove highlight</button>         
                  </div> 
              </div>
            </div>
   
      )}                      
    </div>
  );
}

export default QuestionsWidget;