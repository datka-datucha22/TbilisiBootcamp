import React from 'react'
import { useState } from 'react'
import quizes from '../Quizes.json'
export default function Quiz() {
  const [id, setID] = useState('Enter Quiz ID')
  function checkID(e) {
    for (let quiz of quizes) {
      if (quiz.id === e.target.value) {
        document.querySelector('.perper').removeAttribute('disabled')
        document.querySelector('.perper').style.cursor = 'pointer'
        document.querySelector('.perper').classList.add('animateButtons')

      } else {
        document.querySelector('.perper').setAttribute('disabled', 'true')
        document.querySelector('.perper').style.cursor = 'not-allowed'
        document.querySelector('.perper').classList.remove('animateButtons')

      }
    }
  }

  return (
    <div className="quiz center quizreal">
      <input type="text" spellcheck="false" value={id} onChange={(e) => { setID(e.target.value); checkID(e); }} onClick={(e) => { if (e.target.value === 'Enter Quiz ID') { e.target.value = '' } }} onMouseLeave={(e) => { if (e.target.value === '') { e.target.value = 'Enter Quiz ID' } }} />
      <button className='takequiz perper' disabled='true'>Take Quiz</button>
    </div>
  )
}