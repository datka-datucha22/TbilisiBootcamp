import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import quizes from '../Quizes.json'
export default function Quiz() {
  const [id, setID] = useState('Enter Quiz ID')
  const [button,setButton] = useState(false)
  const navigate = useNavigate()
  function checkID(e) {
    for (let quiz of quizes) {
      if (quiz.id === e.target.value) {
        setButton(true)
        document.querySelector('.perper').style.cursor = 'pointer'
        document.querySelector('.perper').classList.add('animateButtons')

      } else {
        setButton(false)
        document.querySelector('.perper').style.cursor = 'not-allowed'
        document.querySelector('.perper').classList.remove('animateButtons')

      }
    }
  }

  return (
    <div className="quiz center quizreal" >
      <input type="text" spellCheck="false" value={id} onChange={(e) => { setID(e.target.value); checkID(e); }} onClick={(e) => { if (e.target.value === 'Enter Quiz ID') { e.target.value = '' } }} onMouseLeave={(e) => { if (e.target.value === '') { e.target.value = 'Enter Quiz ID' } }} />
      {button ? <button onClick={() => { navigate(`quizes/${id}`) }} className='perper'>Take Quiz</button> : <button onClick={() => { console.log('test') }} className='perper' disabled={true}>Take Quiz</button>}
    </div>
  )
}