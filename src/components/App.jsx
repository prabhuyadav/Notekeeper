import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const htmlApp = (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
  return htmlApp;
}

export default App;
