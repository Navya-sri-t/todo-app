import React,{useState}  from 'react';
import './Todo.css';
import { Modal } from 'react-bootstrap'






function Todo({id,title,description,date,completetodo,deletetodo,edittodo}) {
    const [show, setShow] = useState(false);

    const [newTitle, setTitle] = useState(title)
	const [newDescription, setDescription] = useState(description)
    const [newDate,setDate]=useState(date)

    const handleClose = () => {
    	setShow(false);
    	setTitle(title)
    	setDescription(description)
        setDate(date)
    }
    
    const handleShow = () => setShow(true);

    const editTodoHandler = (title, description,date) => {
    	handleClose()
    	const todo = {
    		id,
    		title,
    		description,
            date,
    	}

    	edittodo(todo)

    	setTitle(title)
    	setDescription(description)
        setDate(date)
    }
   
    
    return (
        
        <div className="todo">
       
        <div className="todo_container">
            <form>

            <input  type="checkbox" onChange={()=>completetodo(id)}></input>
                <h5>{date}</h5>
                <h5>{title}</h5>
                <h6>{description}</h6>
                
    
                
                
               
                <i type="click" className="todo_edit" onClick={handleShow} >Edit</i>
                <Modal show={show} onHide={handleClose}>

	          <h3>Edit</h3>
	        <div >
	        	<form  className="modal_body">
					
					  <label>Title</label>
					  <input type='text' value={newTitle} onChange={e => setTitle(e.target.value)} />
					

					
					  <label>Description</label>
					  <input type='text' value={newDescription} onChange={e => setDescription(e.target.value)} />
					
                   
				     <label>Date</label>
					  <input type='date' value={newDate} onChange={e => setDate(e.target.value)} />
					
				</form>
	        </div>
	        <div className="model_footer">
	          <button className="model_close"  onClick={handleClose}>
	            Close
	          </button>
	          <button className="model_save" onClick={() => editTodoHandler(newTitle, newDescription,newDate)}>
	            Save
	          </button>
	        </div>
	      </Modal>
                
               

                <button className="todo_delete" onClick={()=>deletetodo(id)}>Delete</button>
                </form>
                
              </div>
              </div>
             
                
            
            

    )
}

export default Todo
