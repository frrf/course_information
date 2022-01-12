import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Section = ({text}) => (<h4>{text}</h4>)

const Stat = ({text, score}) => (<span>{text} {score}<br/></span>)

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

  const all = () => (good+neutral+bad)
  const average = () => ((good-bad)/all())
  const positive = () => ((good/all())*100 + ' %')

  return (
    <>
      <Section text='give feedback'/>
      <Button handleClick={handleGoodClick} text={'Good'}/>
      <Button handleClick={handleNeutralClick} text={'Neutral'}/>
      <Button handleClick={handleBadClick} text={'Bad'}/>
      <Section text='statistics'/>
      <Stat text='good' score={good}/>
      <Stat text='neutral' score={neutral}/>
      <Stat text='bad' score={bad}/>
      <Stat text='all' score={all()}/>
      <Stat text='average' score={average()}/>
      <Stat text='positive' score={positive()}/>
    </>
  )
}

export default App