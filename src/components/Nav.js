import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";
import Button from "./base/Button";

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--szXL);
  width: 100%;
  background: transparent;
`;

const NavContent = styled.div`
  grid-column: span 6;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: var(--szXL);
  button {
    color: var(--dark);
    background: var(--light);
    :hover {
      background: var(--mid);
    }
  }
  @media (max-width: 600px) {
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    button {
      display: none;
    }
  }
`;

export default function Nav() {
  return (
    <NavWrapper>
      <Grid>
        <NavContent>
          <img src="http://placehold.it/220x45.jpg" alt="Brain Waves Logo" />
          <Button cta="View Topics" />
        </NavContent>
      </Grid>
    </NavWrapper>
  );
}
