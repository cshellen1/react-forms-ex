import React from 'react'

function Todo(props) {

  const handleSubmit = (e) => {
    const { id } = e.target;
    props.removeTodo(id)
  }

  return (
    <>
      <li
        id={props.id}
        key={props.id}>
        {props.todo} 
        <button
        id={props.id}
        onClick={handleSubmit}
        >
        X
        </button>
      </li>
    </>
  )
}

export default Todo;
