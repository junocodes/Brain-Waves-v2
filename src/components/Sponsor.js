import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";

const SponsorWrapper = styled.div`
  > * {
    padding: var(--szLG) 0;
    border-top: 1px solid var(--mid);
  }
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 900px) {
    > * {
      padding-bottom: calc(var(--szLG) - (var(--szSM)));
    }
  }
`;

const SiteSponsor = styled.div`
  @media (max-width: 900px) {
    grid-column: span 2;
    margin-bottom: var(--szSM);
  }
  @media (max-width: 600px) {
    grid-column: span 3;
  }
`;

export default function Sponsor() {
  return (
    <SponsorWrapper>
      <Grid>
        <SiteSponsor>
          <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        </SiteSponsor>
        <SiteSponsor>
          <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        </SiteSponsor>
        <SiteSponsor>
          <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        </SiteSponsor>
        <SiteSponsor>
          <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        </SiteSponsor>
        <SiteSponsor>
          <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        </SiteSponsor>
        <SiteSponsor>
          <img src="http://placehold.it/180x45.jpg" alt="sponsor name" />
        </SiteSponsor>
      </Grid>
    </SponsorWrapper>
  );
}
