import './App.css';
import Addtodo from './Components/Addtodo';
import axios from 'axios';
import {useState,useEffect} from 'react';
import Todo from './Components/Todo';

function App() {
  const [state, setstate] = useState([])
  async function gettodos(){
    try{
        const response=await axios.get("/api/v1/todo/")
        const {data}=response
        setstate(data)
        console.log(data)

    }
    catch(err){
        console.log(err)
    }
}

useEffect(()=>{
    gettodos()
},[])

async function addtodo(newtodo){
  try{
    console.log(newtodo)
    await axios.post('/api/v1/todo/', newtodo)
    gettodos()

  }
  catch(err){
    console.log(err)
  }
}

async function completetodo(id){
  try{
    const todo=state.filter(todo=>todo.id===id)[0]
    todo.completed=true
    console.log(todo)
    await axios.put(`/api/v1/todo/${id}/`,todo)
    gettodos()
  }
  catch(err){
    console.log(err)
  }
}

async function deletetodo(id){
  try{
    await axios.delete(`/api/v1/todo/${id}/`)
    gettodos()

  }
  catch(err){
    console.log(err)
  }
}



  return (
    <div>
      <Addtodo addtodo={addtodo}/>
      {state.map((item,index)=>(

        !item.completed && <Todo key={index} id={item.id} title={item.title} discription={item.description} date={item.date} completetodo={completetodo}  deletetodo={deletetodo} />
      ))}
     
    </div>
  );
}

export default App;
