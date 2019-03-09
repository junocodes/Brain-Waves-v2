import React, { Component } from "react";
import styled from "styled-components";
import Grid from "./base/Grid";
import sponsorData from "../data/sponsorData";

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
  @media (max-width: 690px) {
    grid-column: span 2;
    margin-bottom: var(--szSM);
  }
  @media (max-width: 300px) {
    grid-column: span 3;
    margin-bottom: var(--szSM);
  }
`;

export default class Sponsor extends Component {
  state = {
    sponsors: sponsorData
  };
  render() {
    const { sponsors } = this.state;
    return (
      <SponsorWrapper>
        <Grid>
          {sponsors.map((sponsor, index) => {
            return (
              <SiteSponsor key={index}>
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </a>
              </SiteSponsor>
            );
          })}
        </Grid>
      </SponsorWrapper>
    );
  }
}
