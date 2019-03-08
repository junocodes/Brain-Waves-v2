import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";

const Feature = styled.div`
  grid-column: span 3;
  margin-bottom: var(--szXXL);
  h3 {
    color: var(--primary);
    margin: 0 0 var(--szSM);
  }
  p {
    margin: 0;
  }
`;

export default function Features() {
  return (
    <Grid>
      <Feature>
        <h3>Curated by Experts</h3>
        <p>
          All of our podcasts are hand selected and come recommended by industry
          experts. Leave the search for quality content for us.
        </p>
      </Feature>
      <Feature>
        <h3>Free Forever</h3>
        <p>
          No ads, arbitrary limits, or distractions. Listen anytime, from any
          device, and as often as you like. Our goal is to help you grow.
        </p>
      </Feature>
    </Grid>
  );
}
