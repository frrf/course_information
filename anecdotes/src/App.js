import React, { useState } from 'react'

const Buttons = ({handleSetSelected,handleSetVotes}) => {
  return (
    <>
      <Button handleClick={handleSetSelected} text='next anecdote'/>
      <Button handleClick={handleSetVotes} text='vote'/>
    </>
  )
}
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const anecdotesNum = anecdotes.length;
  const rand = () => Math.floor(Math.random() * anecdotesNum);

  const setToSelected = () => {setSelected(rand)}

  const [votes, setVotes] = useState({
    0:0,1:0,2:0,3:0,4:0,5:0,6:0
  })

  const setToVotes = () => {
    console.log(selected)
    setVotes({...votes, [selected]:votes[selected]+1})
  }  


  return (
    <>
      {anecdotes[selected]}<br/>
      <span>has {votes[selected]} votes</span><br/>
      <Buttons handleSetSelected={setToSelected} handleSetVotes={setToVotes}/>
    </>
  )
}

export default App