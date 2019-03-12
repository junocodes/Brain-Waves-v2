import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";

const SecondaryWrapper = styled.div`
  margin-bottom: var(--szMD);
`;

export default function Secondary(props) {
  return (
    <SecondaryWrapper>
      <Grid>{props.children}</Grid>
    </SecondaryWrapper>
  );
}
