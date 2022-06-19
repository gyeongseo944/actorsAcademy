import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/c7.jpg";
import img2 from "../assets/Images/c5.jpg";
import img3 from "../assets/Images/c8.jpg";
import img4 from "../assets/Images/c10.jpg";
import img5 from "../assets/Images/c11.jpg";
import img6 from "../assets/Images/c3.jpg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 4vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: 11;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
`;
const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 320px;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};

const Curriculum = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App",
          scrub: true,
          pin: true,
        },
        ease: "none,",
      });
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div id="curriculum">
      <Section ref={ref}>
        <Overlay />
        <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
          Our Curriculum
        </Title>
        <Container ref={ScrollingRef}>
          <Product img={img1} title="Film making" />
          <Product img={img2} title="Dancing class" />
          <Product img={img3} title="Theatrical performance" />
          <Product img={img4} title="Stunt Action class" />
          <Product img={img5} title="Directing practice" />
          <Product img={img6} title="Model class" />
        </Container>
        <Text data-scroll data-scroll-speed="-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <br />
          <br />
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Section>
    </div>
  );
};

export default Curriculum;
