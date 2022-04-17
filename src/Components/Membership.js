import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function Roadmap() {
  return (
    <div id="roadmap" className="about-container">
      <Container className="p-4">
        <div className="about-left">
          <Row>
            {/* <CounterInput max={10} min={5} onChange={ (value) => { console.log(value) } } value={5} /> */}
            <Col lg={3} md={3} sm={12}>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="mb-3 customPadding">
                  <Image src="image/character-1.png" className="w-100 " rounded />
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="text-white ml-3 mr-3 text-center">
                <p className="brown-color font-semi-bold fontSize25">
                  Each Dragon buyer gets a free 3 month membership to the DragonVerse and features like the $DripFilter where you can upload your own pictures, or NFTs and $Drip them out. 
                </p>
                <p className="brown-color fontSize18">
                  You can also $Drip out your dragon in outfits you see your favorite athletes or celebrities wear. Non dragon holders can still join the DragonVerse with a 3 month membership for $24.99 (Connect wallet to join the DragonVerse)
                </p>
                <p className="brown-color fontSize16">
                  *Membership benefits continue even if you sell your dragon.
                </p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12} className="mb-3 customPadding">
                  <Image src="image/character-2.png" className="w-100 " rounded />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
