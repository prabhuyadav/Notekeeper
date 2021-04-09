import React from "react";
import { useState } from "react";

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
      <form>
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
        <button type="submit" onClick={add}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
