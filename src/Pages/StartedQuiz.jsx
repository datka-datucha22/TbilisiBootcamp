import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Countdown from '../Components/Countdown'
import quizes from '../Quizes.json'



export default function StartedQuiz() {
    let {id} = useParams()
    const [quiz,setQuiz] = useState(null)
    const [load,setLoad] = useState(false)
    if(quiz===null){
      quizes.map((item) => {
        if (item.id === id) {
          setQuiz(item)
          setLoad(true)
        }
      })
    }
  if(load){
    return (
      <div className="startedQuiz">
        <div className="top">
          <h1>{quiz.topic}</h1>
          <div className="time">
            <Countdown time={quiz.time}/>
          </div>
        </div>
      </div>
    )
  }else{
    <div className="startedQuiz">
      <div className="top">
        <h1>Loading...</h1>
      </div>
    </div>
  }
}
