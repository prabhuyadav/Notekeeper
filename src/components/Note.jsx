import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function removeNote() {
    props.deleteNote(props.id);
  }
  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteBody}</p>
      <button onClick={removeNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
