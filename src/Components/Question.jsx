import data from '../data'

export default function Question(props) {

 
    let choices = []
    choices.push(props.data.correct_answer)
    choices.push(props.data.incorrect_answers[0])
    choices.push(props.data.incorrect_answers[1])
    choices.push(props.data.incorrect_answers[2])
    console.log(choices)
  
  return (
    <div className='question'>
      <p>{props.data.question}</p>
      <div className='choices'>
        <button className='choice' onClick={props.handleClick}>{choices[0]}</button>
        <button className='choice' onClick={props.handleClick}>{choices[1]}</button>
        <button className='choice' onClick={props.handleClick}>The {choices[2]}</button>
        <button className='choice' onClick={props.handleClick}>{choices[3]}</button>
      </div>
      <hr></hr>
    </div>

   
  )
}