import React from 'react'

const Header = ({courseName}) => (<h1>{courseName}</h1>)

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
  console.log(course)
  return (
      <>
        <Header courseName={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    courses.map(course => 
      <Course key={course.id} course={course}
    />)
  )
}

export default App