import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import quizes from '../Quizes.json'
export default function StartedQuiz() {
    let {id} = useParams()
    const [quiz,setQuiz] = useState(null)
    if(quiz===null){
      quizes.map((item) => {
        if (item.id === id) {
          setQuiz(item)
        }
      })
    }
  return (
    <div className="startedQuiz">
      <div className="top">
        <h1>{quiz.topic}</h1>
      </div>
    </div>
  )
}
