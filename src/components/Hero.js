import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";

const HeroWrapper = styled.div`
  background: var(--primary);
  > * {
    grid-template-rows: var(--szXL) 1fr var(--szXXL);
  }
`;

const HeroContent = styled.div`
  grid-column: span 6;
  grid-row: 2;
  h1 {
    margin: var(--szXXL) 0;
    color: var(--light);
  }
`;

export default function Hero(props) {
  return (
    <HeroWrapper>
      <Grid>
        <HeroContent>
          <h1>{props.headline}</h1>
        </HeroContent>
      </Grid>
    </HeroWrapper>
  );
}

/*
  User Story & Requirements:
  1. Hero headline should change with the view. 
*/
