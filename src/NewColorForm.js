import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import './NewColorForm.css'

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
    <div className='NewColorForm'>
      <form className="NewColorForm-form" onSubmit={handleSubmit}>
        <div className='NewColorForm-div'>
          <label className="NewColorForm-label" htmlFor='hexCode'>Pick a color</label>
          <input 
            className="NewColorForm-input"
            id="hexCode"
            type="color"
            name="hexCode"
            onChange={handleChange}
          />
        </div>
        <div className='NewColorForm-div'>
          <label className="NewColorForm-label" htmlFor='name'>Enter a name</label>
          <input
            className="NewColorForm-input" 
            id="name"
            type="text"
            name="name"
            placeholder="color"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <button className="NewColorForm-button">Add Color</button>
      </form>
    </div>
  )
}

export default NewColorForm

