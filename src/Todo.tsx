import React, { useState } from 'react'
import { Todo } from './modal'
interface props{
    todo:Todo;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    todos:Todo[];
}
const SingleTodo:React.FC <props>= ({todo,setTodos,todos}) => {

const [update,setUpdate]=useState<boolean>(false)
const [edit,setEdite]=useState<string>(todo.todo)


function handelDone(e:number){
    setTodos(todos.map(todo=>todo.id == e?{...todo,isdone:!todo.isdone}:todo ))
}

    function handelDelete(e:number){
       let newTodos=todos.filter(todo=>todo.id !== e)
        setTodos(newTodos)
    }

function handelEdite(e:React.FormEvent,id:number){
e.preventDefault();
// 
setTodos(todos.map(todo=>(todo.id === id ? {...todo,todo:edit}:todo)))
setUpdate(!update)
}

  return (
    <form className='todo' onSubmit={(e)=>handelEdite(e,todo.id)}>
        <div className={`${todo.isdone? 'show':null} done`}>^^</div>
        {
            update?
            <input className='update-filed' type="text" 
            value={edit} onChange={(e)=>setEdite(e.target.value)} />: <li key={todo.id}>{todo.todo}</li>
        }
   
    <ul className='todo-btns'>
      <li onClick={()=>handelDone(todo.id)}>Done</li>
     {
        !update ? <li onClick={()=>setUpdate(!update)}>Update</li>: <button  type='submit'>save</button>
     }
      <li onClick={()=>handelDelete(todo.id)}>Delete</li>
    </ul>
    </form>
  
  )
}

export default SingleTodo