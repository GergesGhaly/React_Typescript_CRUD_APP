import React, { useRef } from 'react'

interface props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handelAdd:(e:React.FormEvent)=>void
}



const SearchInput:React.FC<props>=({todo,setTodo,handelAdd}) => {
  return (
    
    <form onSubmit={handelAdd} className='SearchInput'>
        <input 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="text" placeholder='Add New Task' />    
   <button type='submit'>ADD</button>

 </form>
  )
}

export default SearchInput