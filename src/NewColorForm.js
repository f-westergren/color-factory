import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'

const NewColorForm = ({addColor}) => {
  const initialState = {
    name: '',
    hexCode: ''
  }
  const [formData, setFormData] = useState(initialState)
  const history = useHistory()

  const handleChange = e => {
    const {name, value} = e.target
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    addColor({...formData})
    history.push('/colors')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='hexCode'>Enter a color</label>
      <input 
        id="hexCode"
        type="color"
        name="hexCode"
        onChange={handleChange}
      />
      <label htmlFor='name'>Enter a name</label>
      <input 
        id="name"
        type="text"
        name="name"
        placeholder="color"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <button>Add Color</button>
    </form>
  )
}

export default NewColorForm

