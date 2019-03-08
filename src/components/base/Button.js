import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  height: var(--szLG);
  width: 120px;
  border: none;
  border-radius: var(--szXS);
  font-size: 0.75em;
  color: var(--light);
  background: var(--primary);
  cursor: pointer;
  :hover {
    background: var(--dark);
  }
`;

export default function Button(props) {
  return <ButtonWrapper>{props.cta}</ButtonWrapper>;
}
