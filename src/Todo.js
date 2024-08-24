import React from 'react'

const todo = ({todo}) => {
  return (
    <div>
        <label htmlFor="">
            <input type="checkbox" name="" id="" checked={todo.completed} readOnly />
        </label>
        {todo.name}
    </div>
  )
}

export default todo