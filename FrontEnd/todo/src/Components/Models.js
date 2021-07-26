import React, { useState } from 'react'
import './Models.css'

function Models({show,title,id,discription,edittodo,date}) {
    const [newTitle,settitle]=useState(title)
    const[newDescription,setdescription]=useState(discription)
    const[newdate,setdate]=useState(date);
    function handleclose(){
        show=false;
        settitle(title)
        setdescription(discription)
        setdate(date)
    }

    function editTodoHandler(){
        handleclose()

        const todo={
            id,
            title,
            discription,
            date,
        }
        edittodo(todo)

        settitle(title)
        setdescription(discription)


    }

    if(!show){
        return null
    }
    
    return (
        <div className="model">
           <div className="model_content">
                 <div className="model_header">
                     <h2>Edit Todo</h2>
                 </div>
                 <div className="model_body">
                    <form>
                        <h5>Title</h5>
                      <input type="text" placeholder="title" value={newTitle} onChange={e=>settitle(e.target.value)}/>
                      <h5>Description</h5>
                      <textarea type="text" placeholder="Description" value={newDescription} onChange={e=>setdescription(e.target.value)}/>
                      <h5>Date</h5>
                      <input type="date" value={newdate} onChange={e=>setdate(e.target.value)} />
                    </form>
                 </div>
                 <div className="model_footer">
                     <button onClick={()=>handleclose} className="model_close">close</button>
                     <button onClick={()=>editTodoHandler(newTitle,newDescription,newdate)}>save changes</button>
                 </div>
             </div> 
            
        </div>
    )
}

export default Models
