import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cryptize from "./components/Cryptize/Cryptize";
import WhyCryptize from "./components/WhyCryptize/WhyCryptize";
import Expert from "./components/Expert/Expert";
import Guide from "./components/Guide/Guide";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cryptize />
      <WhyCryptize />
      <Expert />
      <Guide />
      <Features />
      <Team />
    </div>
  );
}

export default App;
