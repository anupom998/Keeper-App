import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";
import  Fab  from "@mui/material/Fab";

const CreateArea = (props) => {

    const [isClicked,setIsClicked] = useState(false);
    

    const [createNote,setCreateNote] = useState({
        title: "",
        content: ""
    })

    const handleClick = () => {
        setIsClicked(true)
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
            setCreateNote(prevNote => {
                return {
                    ...prevNote,
                    [name]: value
                }
            
            })
        }
        
    return (
        <div>
          <form className="create-note">
            { isClicked && <input 
               
                onChange={handleChange} 
                name="title" 
                placeholder="Title"  
                value={createNote.title} /> }
            <textarea
                onClick={handleClick} 
                onChange={handleChange} 
                name="content" 
                placeholder="Take a note..." 
                rows= {isClicked ? "3" : "1"}  
                value={createNote.content} />

            { isClicked && <Zoom in={true}>
                <Fab 
                    onClick={(event) => {
                    {props.onAdd(createNote)}
                    setCreateNote({
                        title:"",
                        content:""
                    })
                    event.preventDefault()
                    }}>   
                    <AddIcon />
                </Fab>
            </Zoom>}
          </form>
        </div>
      );
    }
    
export default CreateArea;



