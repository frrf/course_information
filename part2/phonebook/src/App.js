import React, { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }, {name: 'Ada Lovelace'}
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()

    const checkName = obj => obj.name === newName

    if (!persons.some(checkName)) {
      const nameObject = {name: newName}
      
      newName.length === 0 
        ? alert('Input is blank') 
        : setPersons(persons.concat(nameObject))
    } else {
      alert(`${newName} is already added to phonebook`)
    }
    
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> 

      <h2>Numbers</h2>
      {persons.map(person => 
        <span key={person.name}>{person.name}<br/></span>
      )}
    </div>
  )
}

export default App