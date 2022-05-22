import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .small_1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small_2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;
const AboutUs = () => {
  return (
    <Section id="fixed_target">
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed_target">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        <br />
        <br />
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
        <br />
        <br />
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img data-scroll data-scroll-speed="5" src={img2} className="small_1" alt="About Us" />
        <img data-scroll data-scroll-speed="-2" src={img3} className="small_2" alt="About Us" />
      </Right>
    </Section>
  );
};

export default AboutUs;
