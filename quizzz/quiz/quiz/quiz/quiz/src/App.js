import './App.css';
import React,{useState,Fragment} from 'react'
import StarterPage from './StarterPage';
import style from './style.css'
import { Hidden } from '@mui/material';



function App() {
  
  const query =  [
    {
      question: "How many days in february ?",
      answerOption:[
          {id:1,answer:20,iscorrect:false},
          {id:2,answer:30,iscorrect:false},
          {id:3,answer:31,iscorrect:false},
          {id:4,answer:28,iscorrect:true},
      ]

  },
  {
    question: "who is indian cricket team captain ?",
      answerOption:[
          {id:5,answer:'Dhoni',iscorrect:true},
          {id:6,answer:'Virat Kholi',iscorrect:false},
          {id:7,answer:'Pandya',iscorrect:false},
          {id:8,answer:'Rohit',iscorrect:false},
      ]

  },
  {
    question: "Number of days in leap year ?",
      answerOption:[
          {id:9,answer: 300,iscorrect:false},
          {id:10,answer:320,iscorrect:false},
          {id:11,answer:366,iscorrect:true},
          {id:12,answer:420,iscorrect:false},
      ]

  },
  {
    question: "who is father of nation?",
      answerOption:[
          {id:13,answer: "Gandhi",iscorrect:true},
          {id:14,answer:"Nehru",iscorrect:false},
          {id:15,answer:"SVP",iscorrect:false},
          {id:16,answer:"A.P.J Abdul Kalam",iscorrect:false},
      ]

  },
  {
    question: "which is the happiest country in the world ?",
      answerOption:[
          {id:17,answer: "Switzerland",iscorrect:false},
          {id:18,answer:"America",iscorrect:false},
          {id:19,answer:"Africa",iscorrect:false},
          {id:20,answer:"Finland",iscorrect:true},
      ]

  },
];
  let i = 0;
const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const[style,setStyle] = useState(false)
  const style1 = {overFlow:Hidden}
  const handleAnswerButtonClick = (e) => {
    const nextQuetions = currentQuestion + 1;
    e.preventDefault();
    if (nextQuetions < query.length) {
      setCurrentQuestion(nextQuetions);
      setStyle(false)
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

  const changeStyle =()=>{
    setStyle(true);
  }

  // const setAll = ()=>{
  //   for(let i = 0; i< query.length;i++);
  // }

  return (
   
    <>
     {/* <StarterPage/> */}
    <header className='title'>
      <h1 className="header">Quiz</h1>
      </header>
      <div className="app" >
        
          <>
          <form className='cover' >
          {showScore ? (

           
             <Fragment>
               

  <div className="score-section">
    <h3>You scored {score} out of {query.length}</h3>
  </div>
  <br></br>
  <div className="question-section">
            
           
            <div className="question-text">
           
              {query.map((total,index)=>{
                return(
                  
                  <div key={index}>
                     <span>{++i}.  </span>
                     {/* <br></br> */}
                    {total.question}
                    {/* <br></br> */}
            <div className="answer-section">        
            {total.answerOption.map((option,index) => {
             return(
              
             <ul className='unList'>                
               <li className='list'  style={{
              backgroundColor: option.iscorrect == true? 'green' : ''
            }} >
               <div key={index} >
                {option.answer}
               </div>
             </li>
            
             </ul>
             
             );
             
              })}
              </div>
                    </div>
                  );
                })}
            
            </div>
           
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
              
              {query[currentQuestion].answerOption.map((answerOption,options,index) => (
                
                <ul className='unList'  key={index} style={{
                  backgroundColor: style === options ? 'grey' : '',...style1
                  
                }}  onClick={()=>setStyle(options)}>  
                 
                 
                 {/* {changeStyle} */}
                 {/* { scoreCard(answerOption.iscorrect)} */}
                            
                  <li className='list'  >
                  {answerOption.answer}
                  {options}
                </li>
               
                </ul>
                
               ))}
            </div>
            

            {currentQuestion+1 == 5
            ? 
           
            (<button  className='start-button'  onClick={handleAnswerButtonClick}>Submit</button>)
            :
            (<button  className='start-button'  onClick={handleAnswerButtonClick} >Next</button>)
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