import React from 'react'
import './Addtodo.css';
import {useState} from 'react';

function Addtodo({addtodo}) {
  
  const[title,settitle]=useState('')
  const[description,setdiscription]=useState('')
  const[date,setdate]=useState('')

    function addtodohandler(e){
        e.preventDefault()
        addtodo({
            title,
            description,
            date,
            completed:false,
        })
    }




    return ( <div className="addtodo">

               <div className="addtodo_container">
                   <h1>Todos</h1>
                <form className="addtodo_form">
                <h5>Title</h5>
                     <input type="text" placeholder="title" onChange={e=>settitle(e.target.value)}/>
                    <h5>Discription</h5>
                    <textarea rows="4" cols="4" type="text" placeholder="discription" onChange={e=>setdiscription(e.target.value)}/>
                    <h5>Date</h5>
                    <input type="date" onChange={e=>setdate(e.target.value)}></input>
                    
                    
                    
                    
                    
                    
                    <button type="submit" onClick={addtodohandler}>Add todo</button>




                </form>
        
                </div>


        </div>
    )
}

export default Addtodo