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
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";

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
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
