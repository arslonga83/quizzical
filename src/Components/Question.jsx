export default function Question(props) {
  return (
    <div className='question'>
      <h4>What is the best band in the world?</h4>
      <div className='choices'>
        <button className='choice selected' onClick={props.handleClick}>BTS</button>
        <button className='choice' onClick={props.handleClick}>Green Day</button>
        <button className='choice' onClick={props.handleClick}>The Beatles</button>
        <button className='choice' onClick={props.handleClick}>Metallica</button>
      </div>
      <hr></hr>
    </div>
    
  )
}