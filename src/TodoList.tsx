import React from 'react'
import { Todo } from './modal';
import SingleTodo from './Todo';
interface props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<props> = ({todos,setTodos}) => {
  return (
    <div>
      <ul className="todos-list">
       {

  todos.map(todo=>(
<SingleTodo todo={todo} setTodos={setTodos} todos={todos}/>  
))

       }

      </ul>
    </div>
  )
}

export default TodoList