import React,{useState} from 'react'
import './Todo.css';
import Model from './Models';



function Todo({id,title,discription,date,completetodo,deletetodo,edittodo}) {
    const [show,setshow]=useState(false)

    
    return (
        <div className="todo">
       
        <div className="todo_container">
            <form>

            <input  type="checkbox" onChange={()=>completetodo(id)}></input>
                <h5>{date}</h5>
                <h5>{title}</h5>
                <h6>{discription}</h6>
                
    
                
                
               
                <button className="todo_edit"  onClick={()=>setshow(true)}>Edit</button>
                <Model show={show} id={id} title={title} discription={discription} edittodo={edittodo}/>
                <button className="todo_delete" onClick={()=>deletetodo(id)}>Delete</button>
                </form>

                


        </div>
        
              </div>
                
            
            

    )
}

export default Todo
