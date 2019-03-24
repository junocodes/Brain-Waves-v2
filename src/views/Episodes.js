import React, { Component } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Primary from "../components/Primary";
import { podcast } from "react-icons-kit/fa/podcast";
import podcastData from "../data/podcastData";

const TopicHeader = styled.div`
  div {
    background: var(--primary);
    max-width: 360px;
    margin: 0 auto var(--szMD);
  }
  img {
    display: block;
    mix-blend-mode: multiply;
    height: auto;
    width: 100%;
  }
`;

const EpisodeList = styled.table`
  width: 100%;
  tr {
    height: var(--szLG);
    text-align: left;
  }
  #ep-title-column {
    width: calc(100% - 120px);
  }
  #ep-number-column,
  #ep-duration-column {
    width: var(--szXL);
  }
  #ep-duration-column {
    text-align: right;
  }
`;

export default class Episodes extends Component {
  constructor(props) {
    super(props);

    const topic = podcastData.find(topic => {
      return topic.slug === this.props.match.params.slug;
    });

    this.state = {
      topic: topic,
      currentEpisode: topic.episodes[0],
      isPlaying: false
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = topic.episodes[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setEpisode(episode) {
    this.audioElement.src = episode.audioSrc;
    this.setState({ currentEpisode: episode });
  }

  handleEpisodeClick(episode) {
    const isSameEpisode = this.state.currentEpisode === episode;
    if (this.state.isPlaying && isSameEpisode) {
      this.pause();
    } else {
      if (!isSameEpisode) {
        this.setEpisode(episode);
      }
      this.play();
    }
  }

  render() {
    const { topic } = this.state;
    return (
      <>
        <Hero headline={topic.headline} />
        <Primary iconSRC={podcast}>
          <TopicHeader>
            <h2>{topic.topic}</h2>
            <div>
              <img src={topic.coverArt} alt={topic.topic} />
            </div>
          </TopicHeader>
          <EpisodeList>
            <colgroup>
              <col id="ep-number-column" />
              <col id="ep-title-column" />
              <col id="ep-duration-column" />
            </colgroup>
            <tbody>
              {topic.episodes.map((episode, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => this.handleEpisodeClick(episode)}
                  >
                    <td>{index + 1}</td>
                    <td>{episode.title}</td>
                    <td>{episode.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </EpisodeList>
        </Primary>
      </>
    );
  }
}
