import React from 'react'
import{Link} from 'react-router-dom'

function StartPage() {
  return (
    <div>
      <header className='title'>
      <h1 className="header">Quiz</h1>
      </header>
      <div className="app" ></div>
      <form className='start-cover' >
      <button    className='button'> <Link to='/quiz' className='link' >Start</Link> </button>
      </form>
    </div>
  )
}

export default StartPage
