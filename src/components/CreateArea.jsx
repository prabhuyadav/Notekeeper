import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
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

  const expand = () => setExpanded(true);

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit" onClick={add}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
