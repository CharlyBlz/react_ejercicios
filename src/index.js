import React, { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

const Header = (props)=>{
  return(
    <div>
      <h2>Course: {props.course}</h2>
    </div>
  )
}
const Content = (props)=>{
  return(
    <div>
      <p>{props.part1}: {props.excercises1}</p>
      <p>{props.part2}: {props.excercises2}</p>
      <p> {props.part3}: {props.excercises3}</p>
      
    </div>
  )
}
const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises: {props.excercises1 + props.excercises2 + props.excercises3}</p>
    </div>
  )
}

const App = () => {
  
  const course = 'Web languages'
  const part1 = 'Introduction to React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a Component'
  const exercises3 = 14
  
  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3={part3} excercises1={exercises1} excercises2={exercises2}
      excercises3={exercises3}/>
      <Total excercises1={exercises1} excercises2={exercises2} excercises3={exercises3}/>
    </div>
  )
}

root.render(<App />)