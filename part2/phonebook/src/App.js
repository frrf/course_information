import React, { useState } from 'react'



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

  // makes new array, ter conditional statement returns the new array into the searchNames variable
  const searchNames = userSearch
  ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input
          type="search"
          value={newSearch}
          onChange={handleSearchChange}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addEntries}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 

      <h2>Numbers</h2>
      {searchNames.map(person => 
        <span key={person.id}>{person.name} {person.number}<br/></span>
      )}
    </div>
  )
}

export default App