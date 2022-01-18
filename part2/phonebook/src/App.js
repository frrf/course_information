import React, { useState } from 'react'

const Filter = ({valueVariable,changeHandler}) => {
  return (
  <div>
    filter shown with 
    <input
      type="search"
      value={valueVariable}
      onChange={changeHandler}
    />
  </div>
  )
}


const PersonForm = ({onSubmitHandler,nameHandler,nameValue,numberHandler,numberValue}) => {
  return (
    <form onSubmit={onSubmitHandler}>
    <div>
      name: 
      <input 
        value={nameValue}
        onChange={nameHandler}
      />
    </div>
    <div>
      number: 
      <input 
        value={numberValue}
        onChange={numberHandler}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form> 
  )
}

const Persons = ({phonebookArray}) => {
  return (
    <div>
      {phonebookArray.map(person => 
        <span key={person.id}>{person.name} {person.number}<br/></span>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [userSearch, setUserSearch] = useState(false)
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    setUserSearch(true)
  }
  const addEntries = (event) => {
    event.preventDefault()
    const checkName = obj => obj.name === newName
    const len = persons.length
    if (!persons.some(checkName)) {
      const nameObject = {name: newName, number:newNumber, id:len+1}

      if(newName.length === 0 || newNumber.length ===0) {
        alert('An input field is blank') 
      } else {
        setPersons(persons.concat(nameObject))
      }
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    
    setNewName('')
    setNewNumber('')
  }
  const searchNames = userSearch  //conditional statement returns new array to searchNames
  ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter valueVariable={newSearch} changeHandler={handleSearchChange}/>

      <h2>add a new</h2>
      <PersonForm onSubmitHandler={addEntries}
        nameHandler={handleNameChange} nameValue={newName}
        numberHandler={handleNumberChange} numberValue={newNumber} 
      />

      <h2>Numbers</h2>
      <Persons phonebookArray={searchNames}/>
    </div>
  )
}

export default App