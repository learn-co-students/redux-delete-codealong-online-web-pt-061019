import React from 'react'

// When delete is clicked, props.text is passed into the DELETE action as the payload
const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
