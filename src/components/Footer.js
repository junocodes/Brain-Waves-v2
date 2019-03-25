import React from "react";
import styled from "styled-components";
import brandIcon from "../assets/brand/brainwaves-icon.png";

const FooterContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  text-align: center;
  padding: var(--szXXL) 0;
  img {
    max-width: var(--szXXL);
  }
  small {
    margin-top: var(--szMD);
    color: var(--mid);
  }
  @media (max-width: 660px) {
    padding-bottom: 210px;
  }
`;

export default function Footer() {
  return (
    <FooterContent>
      <img src={brandIcon} alt="Brain Waves Icon" />
      <small>All Rights Reserved &copy; {new Date().getFullYear()}</small>
    </FooterContent>
  );
}
