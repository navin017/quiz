import './App.css';
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import style from './style.css'

function App() {
  const query = [
    {
      question: "How many days in february ?",
      answerOption:[
          {answer:20,iscorrect:false},
          {answer:30,iscorrect:false},
          {answer:31,iscorrect:false},
          {answer:28,iscorrect:true},
      ]

  },
  {
    question: "who is indian cricket team captain ?",
      answerOption:[
          {answer:'Dhoni',iscorrect:true},
          {answer:'Virat Kholi',iscorrect:false},
          {answer:'Pandya',iscorrect:false},
          {answer:'Rohit',iscorrect:false},
      ]

  },
  {
    question: "Number of days in leap year ?",
      answerOption:[
          {answer: 300,iscorrect:true},
          {answer:320,iscorrect:false},
          {answer:366,iscorrect:false},
          {answer:420,iscorrect:false},
      ]

  },
];
const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
      
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
    }

    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < query.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }
  
  return (
    <>
    <header className='title'>
      <h1 className="header">Quiz</h1>
      </header>
      <div className="app" >
        
          <>
          <form className='cover' >
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion+1}</span>
                
              </div>
              
              <div className="question-text">
                {query[currentQuestion].question}
              </div>
             
            </div>
          
            <div className="answer-section">
              {query[currentQuestion].answerOption.map((answerOption) => (
                <ul>                
                  <li
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                  className='btn'
                >
                  {answerOption.answer}
                </li>
                </ul>

                
                
))}
            </div>
            <Button variant="contained"  className='start-button'  > Next </Button> 
            </form>
          </>
        
      </div>
    </>
  );
   
 
}

export default App;
