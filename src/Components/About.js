import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div id="about" className="feature-class">
      <Container>
        <Row>
          <Col md={12} lg={7} className="mb-5 mt-5 p-4 featureLeft">
            <b><p className="mb-0 font-xxl aboutHeading">ABOUT</p></b>
            <p className="font-xxl mb-0 brown-color headingTxt mt-3 font-semi-bold">
              Grant The Dragon and Myyy Dragons are part of the Dripped Out Dragons Universe, or DragonVerse. Myyy Dragons are a collection of 10k baby dragons that live on Polygon.
            </p>
            <p className="fontSize20 brown-color mt-4">
              The DragonVerse is populated by many worlds, each different. All Dripped Out Dragons of the DragonVerse have the $Drip in the middle of their head.
            </p>
            <p className="fontSize20 brown-color mt-2">
              The goal of DragonVerse is to generate a passive income for all coin($Drip) and NfT holders through buying/selling of said assets, and real world stuffed animals, custom animation, tv shows, movies, or licensing.              
            </p>
            <a
              href="https://discord.gg/dY96Fytm"
              target="_blank"
              className="pr-4 joinUs font-xl brown-color cursor-pointer"
            >
              Join Us
            </a>
          </Col>
          <Col lg={1} />
          <Col md={12} lg={4} className="mb-5 mt-5 p-4 align-items-center">
            <img className="mt-3" src="image/slide-gif.png" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
