import React from 'react'
import blob3 from '../assets/blob3.png'
import blob4 from '../assets/blob4.png'
import Question from './Question'

export default function QuizPage() {
  return (
    <main>
      <img src={blob3} className='blob1'></img>
        <div className='quiz-content'>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <button className='check'>Check answers</button>
        </div>
      <img src={blob4} className='blob2'></img>
    </main>
  )
}