import './App.css';
import React,{useState,Fragment} from 'react'
import Button from '@mui/material/Button';
import style from './style.css'


function App() {
  
  const query =  [
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
          {answer: 300,iscorrect:false},
          {answer:320,iscorrect:false},
          {answer:366,iscorrect:true},
          {answer:420,iscorrect:false},
      ]

  },
  {
    question: "who is father of nation?",
      answerOption:[
          {answer: "Gandhi",iscorrect:true},
          {answer:"Nehru",iscorrect:false},
          {answer:"SVP",iscorrect:false},
          {answer:"A.P.J Abdul Kalam",iscorrect:false},
      ]

  },
  {
    question: "which is the happiest country in the world ?",
      answerOption:[
          {answer: "Switzerland",iscorrect:false},
          {answer:"America",iscorrect:false},
          {answer:"Africa",iscorrect:false},
          {answer:"Finland",iscorrect:true},
      ]

  },
];
  
const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = () => {
    const nextQuetions = currentQuestion + 1;
    
    if (nextQuetions < query.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }
  const scoreCard =(iscorrect=>{
    if (iscorrect === true) {
      setScore(score + 1);
    }
  })

  return (
    <>
    
    <header className='title'>
      <h1 className="header">Quiz</h1>
      </header>
      <div className="app" >
        
          <>
          <form className='cover' >
          {showScore ? (
             <Fragment>
    <div className="score-section">
      You scored {score} out of {query.length}
    </div>
    <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion+1}</span>
                
              </div>
              <br></br>
             
              <div className="question-text">
                {query[currentQuestion].question}
              </div>
             
            </div>
             
            <div className="answer-section">
              
              {query[currentQuestion].answerOption.map((answerOption) => (
                
                <ul>                
                  <li className='list'>
                  {answerOption.answer}
                </li>
               
                </ul>
               ))}
            </div>

    </Fragment>
  ):(
    <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion+1}</span>
                
              </div>
              <br></br>
             
              <div className="question-text">
                {query[currentQuestion].question}
              </div>
             
            </div>
             
            <div className="answer-section">
              
              {query[currentQuestion].answerOption.map((answerOption) => (
                
                <ul className='unList'   onClick={() =>
                 scoreCard(answerOption.iscorrect)
                }>                
                  <li className='list'>
                  {answerOption.answer}
                </li>
               
                </ul>
               ))}
            </div>
            

            {currentQuestion+1 == 5
            ? 
           
            (<Button variant="contained"  className='start-button'  onClick={handleAnswerButtonClick}>Submit</Button>)
            :
            (<Button variant="contained"  className='start-button' onClick={handleAnswerButtonClick} >Next</Button>)
           
            }
            
            </>
              )}
            </form>
          </>
        
      </div>
    </>
  );
          
 
}

export default App;
