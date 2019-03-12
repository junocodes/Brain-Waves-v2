import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./views/Landing";
import Topics from "./views/Topics";
import Episodes from "./views/Episodes";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Sponsor from "./components/Sponsor";
import Mailing from "./components/Mailing";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <>
          <Route exact path="/" component={Landing} />
          <Route path="/topics" component={Topics} />
          <Route path="/episodes/:slug" component={Episodes} />
        </>
        <Features />
        <Sponsor />
        <Mailing />
        <Footer />
      </>
    );
  }
}

export default App;
