import React from 'react'
import blob3 from '../assets/blob3.png'
import blob4 from '../assets/blob4.png'
import Question from './Question'
import data from '../data'

export default function QuizPage(props) {

  function handleClick(event) {
    event.target.classList.toggle('selected')
  }

  return (
    <main>
      <img src={blob3} className='blob1'></img>
        <div className='quiz-content'>
        <Question data={props.trivia[0]} handleClick={handleClick}/>
        <Question data={props.trivia[1]} handleClick={handleClick}/>
        <Question data={props.trivia[2]} handleClick={handleClick}/>
        <Question data={props.trivia[3]} handleClick={handleClick}/>
        <Question data={props.trivia[4]} handleClick={handleClick}/>
        <button className='check' onClick={() => console.log('you rock')}>Check answers</button>
        </div>
      <img src={blob4} className='blob2'></img>
    </main>
  )
}