import React, { useState } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import { Todo } from './modal';
import TodoList from './TodoList';


const App:React.FC=()=>{
const [todo,setTodo]=useState<string>('')
const [todos,setTodos]=useState<Todo[]>([])

function handelAdd(e:React.FormEvent) {
  e.preventDefault()
  if(todo){
    setTodos([...todos,
      {
      id:Date.now(),
      todo:todo,
      isdone:false
    }
  ])
  setTodo('')
  }
}
console.log(todos)
  return (
    <div className="App container">
     <h5>Todo App with React & TS  </h5>
     <a target='_blanked' href="https://gerges.ghaly.surge.sh/#/productlist">Check more..</a>
     <SearchInput todo={todo} setTodo={setTodo} handelAdd={handelAdd}/>
    <TodoList todos={todos} setTodos={setTodos} />
    </div>

  );

}

export default App;
