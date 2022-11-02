export default function Question() {
  return (
    <div className='question'>
      <h4>What is the best band in the world?</h4>
      <div className='choices'>
        <button className='choice selected'>BTS</button>
        <button className='choice'>Green Day</button>
        <button className='choice'>The Beatles</button>
        <button className='choice'>Metallica</button>
      </div>
      <hr></hr>
    </div>
    
  )
}