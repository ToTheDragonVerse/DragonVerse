import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function JoinDiscord() {
  return (
    <div id="joinDiscord">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h3 className="text-orange ">EVERYONE FEELS WELCOME HERE</h3>
            <h2 className="">Join our Discord</h2>
            <a
              href="https://discord.gg/dY96Fytm"
              target="_blank"
              className="start-button cursor-pointer"
              style={{
                backgroundImage: "url(image/vip-register-btn.png)",
                fontWeight: "bold",
              }}
            >
              LET’S START
              {/* <span className="start-button cursor-pointer" style={{backgroundImage: "url(image/vip-register-btn.png)", fontWeight: 'bold'}}>LET’S START</span> */}
            </a>
          </Col>
        </Row>
      </Container>
      <div className="footerLogo">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <img src="image/footer-logo.png" style={{margin: "20px 0px"}}></img>
            </Col>

            <Col md={12} className="text-center">
              <ul className="socialIcons d-flex text-center ">
                <li>
                  <a href="#">
                    <span className="nb-icon">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://twitter.com/dragonverses">
                    {" "}
                    <span className="nb-icon">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <span className="nb-icon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={12} className="text-center ">
              <ul className="d-inline-block text-center justify-content-between  m-auto terms">
                {/* <li><a href="#" class="text-orange">Terms of Service</a></li>
                                    <li><a href="#" class="text-orange">Privacy Policy</a></li> */}
                <li>
                  <a
                    target="_blank"
                    href="https://rinkeby.etherscan.io/address/0xAEa5A083C66991D9860B1758eab1cd2216E3Fb15"
                    className="text-orange"
                  >
                    Smart Contract
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={12} className="text-center">
              <p className="text-center copyright text-orange">
                © 2021 Dragon Verse. All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
