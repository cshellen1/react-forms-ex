import React, {useState} from 'react'

function NewBoxForm({addBox}) {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( formData => ({
      ...formData, 
      [name]: value
    }))
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    addBox({...formData})
    setFormData(INITIAL_STATE)
  }

  return ( 
    <form>
      <label htmlFor='color'>Box Color</label>
      <input
        id='color'
        name='color'
        type="text"
        placeholder='color'
        value={formData.color}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor='width'>Box Width</label>
      <input
        id='width'
        name='width'
        type="text"
        placeholder='width'
        value={formData.width}
        onChange={handleChange}
      />
      <br/>
      <label htmlFor='height'>Box Height</label>
      <input
        id='height'
        name='height'
        type="text"
        placeholder='height'
        value={formData.height}
        onChange={handleChange}
      />
      <br/>
      <button onClick={handleSubmit}>Add New Box</button>
    </form>
  )
}


export default NewBoxForm