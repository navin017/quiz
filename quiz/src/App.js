import './App.css';
import Qapp from './Qapp'
import Questions from './Questions'
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import style from './style.css'

function App(props) {
  const [startQuiz,setStartQuiz] = useState(false);
  
  // const startHandler = ()=>{
  //   setStartQuiz(true)
  //   console.log("clicked!")
  // }
   return (
    <div className="App">
    <>
    <header className="App-header">
    <h1 className='title'>Quiz App</h1>
      </header>
      <div>
      <form className='cover'>
         {Questions[startQuiz].question}
    {/* {
      startQuiz&&(
     
       
      )
    } */}
    {/* <div> {questions[0].question}</div> */}
    </form>
    </div>
    </>
    </div>
  )
 
}

export default App;
