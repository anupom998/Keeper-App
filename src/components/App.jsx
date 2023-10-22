import React, { useState } from "react";

import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";




function App() {

  const [notes,setNotes] = useState([]);

  const onAdd = (note) => {
    setNotes(prevNotes => {
      return [...prevNotes,note]
    })
  }

  const onDelete = id =>{
    setNotes(prevNotes => {
      return prevNotes.filter((note,index) => {
        return index !== id
      })
    })
  }

  return (
    
    <div>
      <Header />
      <CreateArea 
        onAdd = {onAdd}
      />
      {notes.map((note,index) => <Note
        key = {index}
        id = {index} 
        title = {note.title}
        content = {note.content}
        onDelete = {onDelete}
      />)}
      
      <Footer />
    </div>
    
  );
}

export default App;
