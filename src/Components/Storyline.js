import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function Roadmap() {
  return (
    <div id="roadmap" className="about-container">
      <Container className="p-4">
        <div className="about-left">
          <Row>
            {/* <CounterInput max={10} min={5} onChange={ (value) => { console.log(value) } } value={5} /> */}
            <Col lg={5} md={12}>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="mb-3 customPadding">
                  <Image src="image/storyline.png" className="w-100 " rounded />
                </Col>
              </Row>
            </Col>
            <Col lg={1} />
            <Col lg={6} md={12}>
              <div className="text-white">
                <div className="brown-color">
                  <b><p className="mb-0 font-xxl aboutHeading">Storyline</p></b>
                </div>
                <p className="brown-color mt-3 font-semi-bold fontSize28">
                  DragonVerse dragons live along side an Earthlike planet with advanced humans 3 degrees from our Earth, called E9. The dragons of E9 are three degrees from source making them the third oldest dragons in their section of the DragonVerse.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
