import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "./base/Grid";
import Button from "./base/Button";
import brandLogo from "../assets/brand/brainwaves-logo.png";

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
  img {
    height: var(--szLG);
  }
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
          <Link to="/">
            <img src={brandLogo} alt="Brain Waves Logo" />
          </Link>
          <Link to="/topics">
            <Button cta="View Topics" />
          </Link>
        </NavContent>
      </Grid>
    </NavWrapper>
  );
}
