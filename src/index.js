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

const Part = (props)=>{
  return (
    <div>
      <p>{props.part1} {props.excercises1}</p>
      <p>{props.part2} {props.excercises2}</p>
      <p>{props.part3} {props.excercises3}</p>
    </div>
  )
}
const Content = (props)=>{
  return(
    <div>
      <Part part1 = {props.part1} excercises1={props.excercises1}/>
      <Part part2 = {props.part2} excercises2={props.excercises2}/>
      <Part part3 = {props.part3} excercises3={props.excercises3}/>
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
  const part1 = {
    name: 'Introduction to React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  
  return (
    <div>
      <Header course = {course}/>

      <Content part1 = {part1.name} excercises1={part1.exercises} part2 = {part2.name} 
      excercises2={part2.exercises} part3 = {part3.name} excercises3={part3.exercises}/>
      
      <Total excercises1={part1.exercises} excercises2={part2.exercises} excercises3={part3.exercises}/>
    </div>
  )
}

root.render(<App />)