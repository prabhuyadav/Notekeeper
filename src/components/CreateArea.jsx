import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function add(e) {
    e.preventDefault();
    props.addNote(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
          onChange={handleChange}
        />
        <Fab type="submit" onClick={add}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
