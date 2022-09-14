import React from 'react'
import { useState } from 'react'
import programs from '../Program.json'
export default function Program() {
  const [id, setID] = useState('Enter Classroom ID')
  function checkID(e) {
    for (let quiz of programs) {
      if (quiz.id === e.target.value) {
        document.querySelector('.takequiz').removeAttribute('disabled')
        document.querySelector('.takequiz').style.cursor = 'pointer'
        document.querySelector('.takequiz').classList.add('animateButtons')

      } else {
        document.querySelector('.takequiz').setAttribute('disabled', 'true')
        document.querySelector('.takequiz').style.cursor = 'not-allowed'
        document.querySelector('.takequiz').classList.remove('animateButtons')

      }
    }
  }

  return (
    <div className="quiz center">
      <input type="text" spellcheck="false" value={id} onChange={(e) => { setID(e.target.value); checkID(e);}} onClick={(e) => { if (e.target.value === 'Enter Classroom ID') { e.target.value = '' } }}
        onMouseLeave={(e) => { if (e.target.value === '') { e.target.value ='Enter Classroom ID'}}} />
      <button className='takequiz' disabled='true'>Join</button>
    </div>
  )
}
