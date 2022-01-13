import React, { useState } from 'react'

const Section = ({text}) => (<h4>{text}</h4>)

const Statistics = ({good,neutral,bad}) => {
  const all = () => (good+neutral+bad)
  const average = () => ((good-bad)/all())
  const positive = () => ((good/all())*100 + ' %')


  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <span>No Feedback given</span>
      </>
    )
  } 
  return (
    <>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={all()}/>
      <StatisticLine text='average' value={average()}/>
      <StatisticLine text='positive' value={positive()}/>
    </>
  )
}

const StatisticLine = ({text, value}) => (<span>{text} {value}<br/></span>)

const Buttons = ({handleGood,handleNeutral,handleBad}) => {
  return (
    <>
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>
    </>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <>
      <Section text='give feedback'/>
      <Buttons handleGood={handleGoodClick} handleNeutral={handleNeutralClick} handleBad={handleBadClick}/>
      <Section text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App