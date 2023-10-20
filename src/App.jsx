import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cryptize from "./components/Cryptize/Cryptize";
import WhyCryptize from "./components/WhyCryptize/WhyCryptize";
import Expert from "./components/Expert/Expert";
import Guide from "./components/Guide/Guide";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cryptize />
      <WhyCryptize />
      <Expert />
      <Guide />
    </div>
  );
}

export default App;
