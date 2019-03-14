import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Primary from "../components/Primary";
import Button from "../components/base/Button";
import { headphones } from "react-icons-kit/fa/headphones";

export default function Landing() {
  return (
    <>
      <Hero headline="We have two ears and one mouth and we should use them proportionally." />
      <Primary iconSRC={headphones}>
        <h2>Welcome to Brain Waves</h2>
        <p>
          A fictitiously curated collection of podcasts for startups. Learn how
          to lead and build better teams, culture, and diversity in the
          workplace. A music application built as part of my coursework for
          Bloc.
        </p>
        <Link to="/topics">
          <Button cta="View Topics" />
        </Link>
      </Primary>
    </>
  );
}
