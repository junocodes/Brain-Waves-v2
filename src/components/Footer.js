import React from "react";
import styled from "styled-components";

const FooterContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  text-align: center;
  padding: var(--szXXL) 0;
  small {
    margin-top: var(--szMD);
    color: var(--mid);
  }
`;

export default function Footer() {
  return (
    <FooterContent>
      <img src="http://placehold.it/90x90.jpg" alt="Brain Waves Icon" />
      <small>All Rights Reserved &copy; {new Date().getFullYear()}</small>
    </FooterContent>
  );
}
