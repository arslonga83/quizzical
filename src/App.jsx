import React from 'react'
import './App.css'
import IntroPage from './Components/IntroPage'
import QuizPage from './Components/QuizPage'

function App() {

  const [playGame, setPlayGame] = React.useState(false)

  function startQuiz() {
    setPlayGame(true)
  }

return (
  playGame ? <QuizPage /> : <IntroPage startQuiz={startQuiz}/>
)



}

export default App
