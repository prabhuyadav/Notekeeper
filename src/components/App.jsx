import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [allNotes, setAllNotes] = useState(notes);
  function addNote(note) {
    setAllNotes((prevNotes) => [...prevNotes, note]);
  }
  function deleteNote(id) {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((_, index) => index !== id);
    });
  }
  const htmlApp = (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {allNotes.map((item, index) => (
        <Note
          key={index}
          id={index}
          noteTitle={item.title}
          noteBody={item.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
  return htmlApp;
}

export default App;
