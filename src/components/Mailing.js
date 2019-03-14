import React from "react";
import styled from "styled-components";
import Grid from "./base/Grid";
import Button from "./base/Button";

const MailingWrapper = styled.div`
  background: linear-gradient(to bottom, var(--light) 50%, var(--dark) 50%);
`;

const MailingContent = styled.div`
  grid-column: 2 / span 4;
  background: var(--mid);
  border-radius: var(--szXS);
  padding: var(--szLG);
  text-align: center;
  h4 {
    margin: 0 0 var(--szSM);
    color: var(--primary);
  }
  p {
    margin: 0 0 var(--szMD);
  }
  @media (max-width: 600px) {
    grid-column: span 6;
  }
`;

const MailingForm = styled.div`
  form {
    margin: 0;
    padding: 0;
    height: var(--szLG);
    input {
      height: 100%;
      max-width: 360px;
      width: calc(100% - 125px);
      border: none;
      border-radius: var(--szXS);
      padding: var(--szSM);
      margin-right: var(--szXS);
      font-size: 1em;
      color: var(--dark);
      background: varr(--light);
    }
  }
  @media (max-width: 600px) {
    form {
      display: flex;
      flex-flow: column;
      align-items: center;
      height: 120px;
      input {
        width: 100%;
        height: var(--szLG);
        margin: 0 0 var(--szMD);
      }
    }
  }
`;

export default function Mailing() {
  return (
    <MailingWrapper>
      <Grid>
        <MailingContent>
          <h4>Never miss an episode!</h4>
          <p>
            If this were a real application, you could sign up and be notified
            with each new episode, but it's not. Who knows, maybe I'll wire this up for fun.
          </p>
          <MailingForm>
            <form>
              <input type="text" name="name" />
              <Button cta="Subscribe" />
            </form>
          </MailingForm>
        </MailingContent>
      </Grid>
    </MailingWrapper>
  );
}
