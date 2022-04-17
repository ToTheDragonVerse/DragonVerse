import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [showImageUrl, setShowImageUrl] = useState("");

  useEffect(() => {
    const teamMembers = [
      {
        image: "image/team_6.jpg",
        name: "The Leader",
        info: "Founder",
      },
      {
        image: "image/team_2.jpg",
        name: "The Developer",
        info: "Super Hero Developer",
      },
      {
        image: "image/team_1.jpg",
        name: "The Guy",
        info: "Assistant/Designer",
      },
      {
        image: "image/team_4.jpg",
        name: "The Numbers Genius",
        info: "Accountant",
      }
    ];
    setTeamMembers(teamMembers);
  }, []);

  return (
    <div id="team" className="our-team pt-3 pb-5">
      <Container className="mt-5">
        <div className="text-center" style={{ marginBottom: -5 }}>
          <span className="our-team-title fontSize36">OUR TEAM</span>
        </div>
        <div className="text-center mb-4">
          {/* <span className="our-team-title-divider" /> */}
        </div>
        <div className="mb-3 subTxt">
          <p className="text-center text-white mb-0 fontSize16">
            The DragonVerse is not a project but a venture with ambitious plans.
          </p>
          <p className="text-center text-white mt-4 fontSize16">
            It started with an idea to create an NFT, and grew into developing a web application to teach children their ABC’s, how to count, their body parts, Tv/Movies to rival companies like Marvel, a DAO to help end child hunger/housing/healthcare crisis globally, and provide the highest APY to our supporters ever. 
          </p>
          <p className="text-center text-white mt-4 fontSize16">
            We are committed to delivering cutting-edge experiences, making our collections a success long-term, making you money, making our children smarter, and doing good.
          </p>
        </div>
        <Row className="our-team-members">
          {teamMembers.map((member, index) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                xxs={12}
                key={"teamMember" + index}
                className="text-white pt-4 pb-4 cursor-pointer member-item"
              >
                <div>
                  <Image src={member.image} className="w-100" style={{height: "288px"}}/>
                  <div className="d-flex align-items-end justify-content-between mt-2">
                    <div>
                      <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                        {member.name}
                      </div>
                      <div style={{ fontSize: "smaller" }}>{member.info}</div>
                    </div>
                    {/* <div className="mb-1">
                      <span className="team-member-nav-icon cursor-pointer" style={{ marginRight: 8 }}>
                        <FaLinkedinIn />
                      </span>
                      <span className="team-member-nav-icon">
                        <FaInstagram onClick={() => {
                          setShowImageUrl(member.image)
                          setModalShow(true)
                        }} />
                      </span>
                    </div> */}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Image src={showImageUrl} className="w-100"></Image>
      </Modal>
    </div>
  );
}
