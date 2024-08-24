import React from 'react'
import Todo from './Todo'

// コンポーネント
const TodoList = ({todos}) => {
  return todos.map((todo) => <Todo todo = {todo} key={todo} />);
};
// 出力
export default TodoList