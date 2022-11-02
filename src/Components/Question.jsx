import data from '../data'

export default function Question(props) {

 
    let choices = []
    choices.push(props.data.correct_answer)
    props.data.incorrect_answers.forEach(answer => {
      choices.push(answer)
    })



  return (
    <div className='question'>
      <p className='question'>{props.data.question}</p>
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