import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0 var(--szLG);
  max-width: 1200px;
  width: calc(100% - (var(--szXXL)));
  margin: 0 auto;
`;

export default function Grid(props) {
  return <GridWrapper>{props.children}</GridWrapper>;
}
