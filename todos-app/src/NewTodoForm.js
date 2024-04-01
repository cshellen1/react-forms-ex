import React, {useState} from 'react'

function NewTodoForm({ addTodo }) {
  const INITIAL_STATE = {
    todo: ''
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
    addTodo({ ...formData })
    setFormData(INITIAL_STATE)
  }

  return (
    <form>
      <label
        htmlFor='todo'>
        Task
      </label>
      <input
        id='todo'
        type='text'
        name='todo'
        value={formData.todo}
        placeholder='todo'
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default NewTodoForm