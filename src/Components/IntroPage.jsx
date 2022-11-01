import blob1 from '../assets/blob-top.png'
import blob2 from '../assets/blob-bottom.png'

export default function IntroPage() {
  return (
    <main >
     <img src={blob1} className='blob1'></img>
     <div className='intro-page'>
      <h1>Quizzical</h1>
      <h5>A simple trivia app built with React</h5>
      <button className='start'>Start quiz</button>
     </div>
     <img src={blob2} className='blob2'></img>
    </main>
  )
}