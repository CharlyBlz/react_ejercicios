import React, { useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)

const Header = (props)=>{
  return(
    <div>
      <h2>Course: {props.course.name}</h2>
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
      <Part part1 = {props.course.parts[0].name} excercises1={props.course.parts[0].exercises}/>
      <Part part2 = {props.course.parts[1].name} excercises2={props.course.parts[1].exercises}/>
      <Part part3 = {props.course.parts[2].name} excercises3={props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props)=>{
  return(
    <div>
      <p>Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises +
       props.course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Web languages',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}
root.render(<App />)