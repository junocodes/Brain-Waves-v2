import React, { Component } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Primary from "../components/Primary";
import Player from "../components/Player";
import { Icon } from "react-icons-kit";
import { podcast } from "react-icons-kit/fa/podcast";
import { play } from "react-icons-kit/entypo/play";
import { paus } from "react-icons-kit/entypo/paus";
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
      currentTime: 0,
      duration: topic.episodes[0].duration,
      currentVolume: 0.5,
      isPlaying: false,
      isHovered: false
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = topic.episodes[0].audioSrc;
    this.audioElement.volume = 0.5;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ currentVolume: this.audioElement.volume });
      }
    };
    this.audioElement.addEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.removeEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
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

  handlePrevClick() {
    const currentIndex = this.state.topic.episodes.findIndex(
      episode => this.state.currentEpisode === episode
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newEpisode = this.state.topic.episodes[newIndex];
    this.setEpisode(newEpisode);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.topic.episodes.findIndex(
      episode => this.state.currentEpisode === episode
    );
    const newIndex = Math.min(
      this.state.topic.episodes.length - 1,
      currentIndex + 1
    );
    const newEpisode = this.state.topic.episodes[newIndex];
    this.setEpisode(newEpisode);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ currentVolume: newVolume });
  }

  formatTime(time) {
    var sec_num = parseInt(time, 10);
    var hours = Math.floor((sec_num + 0.001) / 3600) % 24;
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;
    if (isNaN(hours)) {
      return "-:--";
    } else {
      return [hours, minutes, seconds]
        .map(v => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
    }
  }

  render() {
    const { topic, isPlaying, currentEpisode, isHovered } = this.state;

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
                    onMouseEnter={() => this.setState({ isHovered: index + 1 })}
                    onMouseLeave={() => this.setState({ isHovered: false })}
                    onClick={() => this.handleEpisodeClick(episode)}
                  >
                    <td>
                      {isPlaying && episode === currentEpisode && (
                        <Icon icon={paus} />
                      )}
                      {!isPlaying && episode === currentEpisode && (
                        <Icon icon={play} />
                      )}
                      {episode !== currentEpisode &&
                        isHovered === index + 1 && <Icon icon={play} />}
                      {episode !== currentEpisode &&
                        isHovered !== index + 1 &&
                        index + 1}
                    </td>
                    <td>{episode.title}</td>
                    <td>{this.formatTime(episode.duration)}</td>
                  </tr>
                );
              })}
            </tbody>
          </EpisodeList>
        </Primary>
        <Player
          isPlaying={isPlaying}
          currentSong={currentEpisode}
          handleEpisodeClick={() => this.handleEpisodeClick(currentEpisode)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          handleTimeChange={e => this.handleTimeChange(e)}
          currentVolume={this.audioElement.volume}
          handleVolumeChange={e => this.handleVolumeChange(e)}
          formatTime={time => this.formatTime(time)}
        />
      </>
    );
  }
}
