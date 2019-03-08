import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";

const SponsorWrapper = styled.div`
  > * {
    padding: var(--szLG) 0;
    border-top: 1px solid var(--mid);
  }
  img {
    width: 100%
    height: auto;
  }
`;

export default function Sponsor() {
  return (
    <SponsorWrapper>
      <Grid>
        <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
      </Grid>
    </SponsorWrapper>
  );
}
