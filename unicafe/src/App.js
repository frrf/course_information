import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Section = ({text}) => (<h4>{text}</h4>)

const Statistics = ({text1, score1,text2, score2,text3, score3,text4, score4,text5,score5,text6, score6}) => {
  if (score1 === 0 && score2 === 0 && score3 === 0 && score4 === 0) {
    return (
      <>
        <span>No Feedback given</span>
      </>
    )
  } 
  return (
    <>
      <span>{text1} {score1}<br/></span>
      <span>{text2} {score2}<br/></span>
      <span>{text3} {score3}<br/></span>
      <span>{text4} {score4}<br/></span>
      <span>{text5} {score5}<br/></span>
      <span>{text6} {score6}<br/></span>
    </>
  )
  
}

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
      <Statistics 
        text1='good' score1={good}
        text2='neutral' score2={neutral}
        text3='bad' score3={bad}
        text4='all' score4={all()}
        text5='average' score5={average()}
        text6='positive' score6={positive()}
      />
    </>
  )
}

export default App