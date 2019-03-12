import React, { Component } from "react";
import Hero from "../components/Hero";
import Primary from "../components/Primary";
import { headphones } from "react-icons-kit/fa/headphones";

export default class Episodes extends Component {
  render() {
    return (
      <>
        <Hero headline="Most of the successful people I’ve known are the ones who do more listening than talking." />
        <Primary iconSRC={headphones}>
          <h2>{this.props.match.params.slug}</h2>
          <p>Content</p>
        </Primary>
      </>
    );
  }
}
