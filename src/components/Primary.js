import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";
import { Icon } from "react-icons-kit";

const PrimaryWrapper = styled.div`
  background: var(--mid);
  grid-column: 2 / span 4;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-gap: 0;
  border-radius: var(--szXS);
  margin-top: -90px;
  z-index: 100;
  padding: var(--szLG);
  margin-bottom: var(--szXXL);
  @media (max-width: 600px) {
    grid-column: span 6;
    text-align: center;
  }
`;

const PrimaryIcon = styled.div`
  display: flex;
  justify-content: center;
  color: var(--primary);
`;

const PrimaryContent = styled.div`
  grid-row: 2;
`;

export default function Primary(props) {
  return (
    <Grid>
      <PrimaryWrapper>
        <PrimaryIcon>
          <Icon icon={props.iconSRC} size={30} />
        </PrimaryIcon>
        <PrimaryContent>{props.children}</PrimaryContent>
      </PrimaryWrapper>
    </Grid>
  );
}

/*
  User Story & Requirements:
  1. Primary content should update with the view.
*/
