import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero from "../components/Hero";
import Primary from "../components/Primary";
import Secondary from "../components/Secondary";
import Button from "../components/base/Button";
import { bullhorn } from "react-icons-kit/fa/bullhorn";
import podcastData from "../data/podcastData";

const TopicWrapper = styled.div`
  grid-column: span 3;
  background: var(--primary);
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: var(--szXL);
  @media (max-width: 600px) {
    grid-column: span 6;
  }
`;

const TopicCover = styled.img`
  display: block;
  mix-blend-mode: multiply;
  height: auto;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;

const TopicInfo = styled.div`
  grid-column: 1;
  grid-row: 1;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: var(--light);
  z-index: 100;
  display: flex;
  flex-flow: column;
  justify-content: center;
  h2 {
    margin: 0 0 var(--szXS);
    color: var(--light);
  }
  span {
    color: var(--mid);
    margin-bottom: var(--szSM);
  }
  button {
    color: var(--dark);
    background: var(--light);
    :hover {
      background: var(--mid);
    }
  }
`;

export default class Topics extends Component {
  state = {
    topics: podcastData
  };
  render() {
    const { topics } = this.state;
    return (
      <>
        <Hero headline="Human behavior flows from three main sources: desire, emotion, and knowledge." />
        <Primary iconSRC={bullhorn}>
          <h2>Topics</h2>
          <p>
            Regardless if you're putting together your first team or leading a
            fortune 500 company, we want to help you succeed. Our topics aim to
            meet you where you are with episodes covering everything from the
            very basics to stakeholder persuasion, and implementation.
          </p>
        </Primary>
        <Secondary>
          {topics.map((topic, index) => {
            return (
              <TopicWrapper key={index}>
                <TopicCover src={topic.coverArt} alt={topic.topic} />
                <TopicInfo>
                  <h2>{topic.topic}</h2>
                  <span>{topic.episodes.length} episodes</span>
                  <Link to={`/episodes/${topic.slug}`}>
                    <Button cta="Listen" />
                  </Link>
                </TopicInfo>
              </TopicWrapper>
            );
          })}
        </Secondary>
      </>
    );
  }
}
