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

const Anecdote = ({anecdote,vote,header}) => {
  return (
    <>
      <h2>{header}</h2>
      <p>{anecdote}</p>
      <Votes vote={vote}/>
    </>
  )
}

const Votes = ({vote}) => {
  return (
    <>
      <span>has {vote} votes</span><br/>
    </>
  )
}

const TopAnecdote = ({anecdote,vote,header}) => {
  const arr = Object.values(vote)
  const max = Math.max(...arr)
  const index = arr.indexOf(max)
  
  if (max === 0) {return (<></>)}  

  return (
    <>
      <Anecdote anecdote={anecdote[index]} vote={vote[index]} header={header}/>
    </>
  )
}

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
    // ...votes creates copy of votes object, 
    // [selected]:---- modifies the a single property in object to increment clicked value
    setVotes({...votes, [selected]:votes[selected]+1})
  }  


  return (
    <>
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} header='Anecdote of the day'/>
      <Buttons handleSetSelected={setToSelected} handleSetVotes={setToVotes}/>
      <TopAnecdote anecdote={anecdotes} vote={votes} header='Anecdote with most votes'/>
    </>
  )
}

export default App