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
                  <div className="brown-color">
                    <b><p className="mb-0 font-xxl aboutHeading">ROADMAP</p></b>
                  </div>
                  <Image src="image/roadmap.png" className="w-100 " rounded />
                </Col>
              </Row>
            </Col>
            <Col lg={7} md={12}>
              <div className="text-white">
                <p className="brown-color mt-3 font-semi-bold fontSize28">
                  In our effort to provide maximum value to our supporters, 25% of all sales fees will be given back to our supporters in $Drip. 50% of all sales fees will be put in to a liquidity pool, and locked. The final 25% will be for operations, and growing the DragonVerse.
                </p>
              </div>
              <a
                href="https://discord.gg/dY96Fytm"
                target="_blank"
                className="pr-4 joinUs font-xl brown-color cursor-pointer"
              >
                Mint My Dragon
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
