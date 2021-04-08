import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const createNote = (item) => (
  <Note key={item.key} noteTitle={item.title} noteBody={item.content} />
);
function App() {
  const htmlApp = (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
  return htmlApp;
}

export default App;
