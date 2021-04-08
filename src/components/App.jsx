import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const htmlApp = (
    <div>
      <Header />
      <Note noteTitle="Test" noteBody="This is a test note" />
      <Note noteTitle="Intro" noteBody="Intro to React JS" />
      <Note noteTitle="Props" noteBody="This is React properties example" />
      <Footer />
    </div>
  );
  return htmlApp;
}

export default App;
