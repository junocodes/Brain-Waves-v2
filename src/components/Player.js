import React, { Component } from "react";
import styled from "styled-components";
import Grid from "./base/Grid";
import { Icon } from "react-icons-kit";
import { play } from "react-icons-kit/entypo/play";
import { paus } from "react-icons-kit/entypo/paus";
import { next } from "react-icons-kit/entypo/next";
import { jumpToStart } from "react-icons-kit/entypo/jumpToStart";
import { volume } from "react-icons-kit/entypo/volume";

const PlayerWrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  height: var(--szXL);
  width: 100vw;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light);
  border-top: 1px solid var(--mid);
  > div {
    grid-gap: 0;
  }
  span {
    font-size: 0.8;
    display: inline-block;
  }
  input {
    margin: 0 var(--szXS);
  }
  @media (max-width: 660px) {
    height: auto;
    padding: var(--szMD) 0;
  }
`;

const EpisodeControls = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: span 2;
  padding: 0;
  margin: 0;
  li {
    height: var(--szMD);
    width: var(--szMD);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    border-radius: var(--szMD);
    color: var(--light);
    margin-left: var(--szSM);
    :first-of-type {
      margin-left: 0;
    }
  }
  @media (max-width: 660px) {
    grid-column: span 6;
    order: 1;
  }
`;

const EpisodeDuration = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 660px) {
    grid-column: span 6;
    order: 2;
    padding: var(--szSM) 0;
    justify-content: center;
  }
`;

const EpisodeVolume = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 660px) {
    grid-column: span 6;
    order: 3;
    justify-content: center;
  }
`;

export default class Player extends Component {
  render() {
    const {
      isPlaying,
      handleEpisodeClick,
      handlePrevClick,
      handleNextClick,
      currentTime,
      duration,
      handleTimeChange,
      currentVolume,
      handleVolumeChange
    } = this.props;

    return (
      <PlayerWrapper>
        <Grid>
          <EpisodeDuration>
            <span>
              <small>{currentTime}</small>
            </span>
            <input
              type="range"
              value={currentTime / duration || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={handleTimeChange}
            />
            <span>
              <small>{duration}</small>
            </span>
          </EpisodeDuration>
          <EpisodeControls>
            <li>
              <Icon icon={jumpToStart} onClick={handlePrevClick} />
            </li>
            <li onClick={handleEpisodeClick}>
              {isPlaying ? <Icon icon={paus} /> : <Icon icon={play} />}
            </li>
            <li>
              <Icon icon={next} onClick={handleNextClick} />
            </li>
          </EpisodeControls>
          <EpisodeVolume>
            <span>
              <Icon icon={volume} />
            </span>
            <input
              type="range"
              value={currentVolume}
              max="1"
              min="0"
              step=".01"
              onChange={handleVolumeChange}
            />
            <span>
              <small>
                <small>{currentVolume * 100}%</small>
              </small>
            </span>
          </EpisodeVolume>
        </Grid>
      </PlayerWrapper>
    );
  }
}
