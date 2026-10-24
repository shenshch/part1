import { useState } from 'react'
import axios from 'axios'

const App=()=>{
  const [persons,setPersons]=useState([{array:1,name:'alis',number:'123456'}])
  const [newName,setNewName]=useState('')
  const [newNumber,setNewNumber]=useState('')

  const addPerson=(event)=>{
    event.preventDefault()
    if(newName===''){
      alert('请输入姓名')
      return
    }
    if(persons.filter(person=>person.name===newName).length>0){
      alert(`${newName} already exists`)
      return
    }
    if(newNumber===''){
      alert('请输入手机号')
      return
    }
    if(!/^\d{6}$/.test(newNumber)){
      alert('手机号格式错误')
      return
    }
    const newPerson={
      array:persons.length+1,
      name:newName,
      number:newNumber
    }
    setPersons([...persons,newPerson])
    setNewName('')
    setNewNumber('')
  }
  const handleNewName=(event)=>{
    setNewName(event.target.value)
  }
  const handleNewNumber=(event)=>{
    setNewNumber(event.target.value)
  }

  return(
    <div>
      <h1>Phonebook</h1>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        name: <input value={newName} onChange={handleNewName} /><br />
        number: <input value={newNumber} onChange={handleNewNumber} /><br />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person=> (<p key={person.array}>{person.name} {person.number}</p>))}  
      </div>
    </div>
  )
}
export default App