import React, { Component } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Primary from "./components/Primary";
import Features from "./components/Features";
import Sponsor from "./components/Sponsor";
import Mailing from "./components/Mailing";
import Footer from "./components/Footer";
import { home } from "react-icons-kit/icomoon/home";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Hero headline="Welcome to Brain Waves" />
        <Primary iconSRC={home}>Content is going here.</Primary>
        <Features />
        <Sponsor />
        <Mailing />
        <Footer />
      </>
    );
  }
}

export default App;
