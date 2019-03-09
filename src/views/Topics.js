import React from "react";
import Hero from "../components/Hero";
import Primary from "../components/Primary";
import { bullhorn } from "react-icons-kit/fa/bullhorn";

export default function Topics() {
  return (
    <>
      <Hero headline="Human behavior flows from three main sources: desire, emotion, and knowledge." />
      <Primary iconSRC={bullhorn}>
        <h2>Topics</h2>
        <p>Content</p>
      </Primary>
    </>
  );
}
