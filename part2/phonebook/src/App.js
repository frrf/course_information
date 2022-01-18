import React, { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '323-2323' }, {name: 'Ada Lovelace', number: '323-2323' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addEntries = (event) => {
    event.preventDefault()

    const checkName = obj => obj.name === newName

    if (!persons.some(checkName)) {
      const nameObject = {name: newName, number:newNumber}

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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => 
        <span key={person.name}>{person.name} {person.number}<br/></span>
      )}
    </div>
  )
}

export default App