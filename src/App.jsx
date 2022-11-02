import React from 'react'
import './App.css'
import IntroPage from './Components/IntroPage'
import QuizPage from './Components/QuizPage'

function App() {

  const [playGame, setPlayGame] = React.useState(false)

  const [trivia, setTrivia] = React.useState([])

  React.useEffect(() => {
    console.log('effect ran')
   fetch('https://opentdb.com/api.php?amount=5&category=16&type=multiple')
     .then((response) => response.json())
     .then((data) => setTrivia(data.results))
 }, [])

 function startQuiz() {
  setPlayGame(true)
}

return (
  playGame ? <QuizPage trivia={trivia}/> : <IntroPage startQuiz={startQuiz}/>
)



}

export default App
