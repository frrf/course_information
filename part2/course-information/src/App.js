import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}  

const Total = ({parts}) => {
  const arr= parts.map(part=>part.exercises)
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  
  return (
    <>      
      <p><strong>total of {arr.reduce(reducer)} exercises</strong></p>  
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part.name} exercise={part.exercises}
      />)}
    </>
  )
} 

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Course = ({course}) => {
  return (
      <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App