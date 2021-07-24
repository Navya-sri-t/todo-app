import React from 'react'
import './Todo.css';


function Todo({id,title,discription,date,completetodo,deletetodo}) {


    
    return (
        <div className="todo">
       
        <div className="todo_container">
            <form>

            <input  type="checkbox" onChange={()=>completetodo(id)}></input>
                <h5>{date}</h5>
                <h5>{title}</h5>
                <h6>{discription}</h6>
                
    
                
                
               
                {/* <button className="todo_edit" >Edit</button> */}
                <button className="todo_delete" onClick={()=>deletetodo(id)}>Delete</button>
                </form>

                


        </div>
        
              </div>
                
            
            

    )
}

export default Todo
