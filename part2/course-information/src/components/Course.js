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
  return (
      <>
        <Header courseName={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </>
  )
}



export default Course