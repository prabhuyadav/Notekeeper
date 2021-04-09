import React from "react";

function Note(props) {
  function removeNote() {
    props.deleteNote(props.id);
  }
  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteBody}</p>
      <button onClick={removeNote}>DELETE</button>
    </div>
  );
}

export default Note;
