import React from 'react'

function Questions() {
    const Query = [
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
    
  return (
    <div>
      
    </div>
  )
  
}

export default Questions;

