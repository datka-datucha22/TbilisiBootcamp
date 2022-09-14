import React from 'react'
import { useState } from 'react'
import programs from '../Program.json'
export default function Program() {
  const [id, setID] = useState('Enter Classroom ID')
  function checkID(e) {
    for (let quiz of programs) {
      if (quiz.id === e.target.value) {
        document.querySelector('.cruisine').removeAttribute('disabled')
        document.querySelector('.cruisine').style.cursor = 'pointer'
        document.querySelector('.cruisine').classList.add('animateButtons')

      } else {
        document.querySelector('.cruisine').setAttribute('disabled', 'true')
        document.querySelector('.cruisine').style.cursor = 'not-allowed'
        document.querySelector('.cruisine').classList.remove('animateButtons')

      }
    }
  }

  return (
    <div className="quiz center">
      <input type="text" spellCheck="false" value={id} onChange={(e) => { setID(e.target.value); checkID(e);}} onClick={(e) => { if (e.target.value === 'Enter Classroom ID') { e.target.value = '' } }}
        onMouseLeave={(e) => { if (e.target.value === '') { e.target.value ='Enter Classroom ID'}}} />
      <button className='takequiz cruisine' disabled={true}>Join</button>
    </div>
  )
}
