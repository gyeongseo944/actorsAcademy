import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/video6.mp4";

// Style section ///
const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;
const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: "Kaushan script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 5px 5px 5px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontxl};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay="0.24" data-scroll-speed="4">
            A
          </h1>
          <h1 data-scroll data-scroll-delay="0.18" data-scroll-speed="4">
            c
          </h1>
          <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            t
          </h1>
          <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            o
          </h1>
          <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            r
          </h1>
          <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            s
          </h1>
        </div>
        <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">
          Inspire, Create, Belive
        </h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
