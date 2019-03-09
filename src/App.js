import React, { Component } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Primary from "./components/Primary";
import Features from "./components/Features";
import Sponsor from "./components/Sponsor";
import Mailing from "./components/Mailing";
import Footer from "./components/Footer";
import { headphones } from "react-icons-kit/fa/headphones";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Hero headline="Most of the successful people I’ve known are the ones who do more listening than talking." />
        <Primary iconSRC={headphones}>
          <h2>Welcome to Brain Waves</h2>
          <p>
            A fictitiously curated collection of podcasts for startups. Learn
            how to lead and build better teams, culture, and diversity in the
            workplace. A music application built as part of my coursework for
            Bloc.
          </p>
        </Primary>
        <Features />
        <Sponsor />
        <Mailing />
        <Footer />
      </>
    );
  }
}

export default App;
