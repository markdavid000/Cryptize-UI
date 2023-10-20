import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cryptize from "./components/Cryptize/Cryptize";
import WhyCryptize from "./components/WhyCryptize/WhyCryptize";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cryptize />
      <WhyCryptize />
    </div>
  );
}

export default App;
