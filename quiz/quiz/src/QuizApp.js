

import React, { useState, Fragment } from 'react'
import style from './style.css'




function Quiz() {

const query = [
	{
		question: "How many days in february ?",
		answerOption: 
		[
			{ id: 1, answer: 20, iscorrect: false,isSelected:false },
			{ id: 2, answer: 30, iscorrect: false,isSelected:false },
			{ id: 3, answer: 31, iscorrect: false,isSelected:false },
			{ id: 4, answer: 28, iscorrect: true,isSelected:false },
		]

	},
	{
		question: "who is indian cricket team captain ?",
		answerOption: 
		[
			{ id: 5, answer: 'Dhoni', iscorrect: true,isSelected:false },
			{ id: 6, answer: 'Virat Kholi', iscorrect: false,isSelected:false },
			{ id: 7, answer: 'Pandya', iscorrect: false,isSelected:false },
			{ id: 8, answer: 'Rohit', iscorrect: false,isSelected:false },
		]

	},
	{
		question: "Number of days in leap year ?",
		answerOption: 
		[
			{ id: 9, answer: 300, iscorrect: false,isSelected:false },
			{ id: 10, answer: 320, iscorrect: false,isSelected:false },
			{ id: 11, answer: 366, iscorrect: true,isSelected:false },
			{ id: 12, answer: 420, iscorrect: false,isSelected:false },
		]

	},
	{
		question: "who is father of nation?",
		answerOption: 
		[
			{ id: 13, answer: "Gandhi", iscorrect: true,isSelected:false },
			{ id: 14, answer: "Nehru", iscorrect: false,isSelected:false },
			{ id: 15, answer: "SVP", iscorrect: false,isSelected:false },
			{ id: 16, answer: "A.P.J Abdul Kalam", iscorrect: false,isSelected:false },
		]

	},
	{
		question: "which is the happiest country in the world ?",
		answerOption:
		[
			{ id: 17, answer: "Switzerland", iscorrect: false,isSelected:false },
			{ id: 18, answer: "America", iscorrect: false,isSelected:false },
			{ id: 19, answer: "Africa", iscorrect: false,isSelected:false },
			{ id: 20, answer: "Finland", iscorrect: true,isSelected:false },
		]

	},
];
let i = 0;
const [currentQuestion, setCurrentQuestion] = useState(0)
const [showScore, setShowScore] = useState(false)
const [score, setScore] = useState(0)
const [trigger, setTrigger] = useState(true)
const [choosed,setChoosed] = useState([])
const [confirm, setConfirm] = useState({
	isConfirm: false
})
const [style, setStyle] = useState(true)

const handleAnswerButtonClick = (e) => {
	const nextQuetions = currentQuestion + 1;
	e.preventDefault();
	if (nextQuetions < query.length) {
		setCurrentQuestion(nextQuetions);
		setStyle(false)
	}
	
}

const handleConfirm = (e) => {
	e.preventDefault()
	setConfirm({ isConfirm: true })
}


const scoreCard = (iscorrect => {
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
								<h4 className='header'>You scored {score} out of {query.length}</h4>
							</div>
							<br></br>
							<div className="answer-question-section">


								<div className="answer-question-text">

									{query.map((total, index) => {
										return (

											<div key={index}>
												<span>{++i}.  </span>

												{total.question}

												<div className="show-answer-section">
													{total.answerOption.map((option, index) => {
															const selectedIds = choosed.map(id => id.toString());
															const isSelected = selectedIds.includes(option.id.toString());
															const isCorrect = option.iscorrect;
															const backgroundColor = isSelected
															? isCorrect ? 'rgb(115, 247, 51)' : 'rgb(255, 70, 70)'
															: isCorrect ? 'rgb(115, 247, 51)' : '';
														return (
															<ul className='unList'>
																<li className='list' style={{backgroundColor}}>
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
					) : (
						<>
							<div className="question-section">
								<div className="question-count">
									<span className='count'>Question {currentQuestion + 1}</span>

								</div>
								<br></br>

								<div className="question-text">
									{query[currentQuestion].question}
								</div>

							</div>

							<div className="answer-section">

								{query[currentQuestion].answerOption.map((answerOption, options, index) => (
									
									<ul className='unList' onClick={() => {setChoosed([answerOption.id].concat(choosed)) ;setStyle(options); scoreCard(answerOption.iscorrect) }}>
										<li className='list'
											key={index}
											style={{
												backgroundColor: style === options ? 'rgb(180, 145, 255)' : '',
											}} >
											{answerOption.answer}
										</li>
									</ul>

								))}
							</div>
							{currentQuestion + 1 === 5 ?
								(<button className='start-button' onClick={handleConfirm} >Submit</button>)
								:
								(<button className='start-button' onClick={handleAnswerButtonClick} >Next</button>)
							}
						</>

					)}

				</form>
			</>

		</div>
		{confirm.isConfirm && <Popup />}
	</>

);

function Popup() {
	const handleYes = (e) => {
		e.preventDefault()
		setTrigger(true)

		if (trigger === true) {
			setShowScore(true);
			setConfirm({ isConfirm: false })
			
		}
	}
	const handleNo = (e) => {
		e.preventDefault()
		setTrigger(false)
		setConfirm({ isConfirm: false })
	}

	return (
		<div>
			<form className='confirm-form'>
				<h3>Are you sure to submit your answers ?</h3>
				<br></br>
				<div className='btn' >
					<button className='confirm-btn1' onClick={handleYes}>Yes</button>
					<button className='confirm-btn2' onClick={handleNo}>No</button>
				</div>
			</form>
		</div>
	)
}
}
export default Quiz;