import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function DevelopStages() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [showImageUrl, setShowImageUrl] = useState("");

  useEffect(() => {
    const teamMembers = [
      {
        image: "image/dragon-character-1.png",
        description: "Baby with no wings (stay this way for 1-2000 dragon years or 1-2 Earth years)"
      },
      {
        image: "image/dragon-character-2.png",
        description: "Baby with wings (stay this way for 1000 years or 1 Earth year)"
      },
      {
        image: "image/dragon-character-3.png",
        description: "Jnr (stay this way for 13,000 years or 13 Earth years)"
      },
      {
        image: "image/secret.png",
        description: "Baby with no wings (stay this way for 1-2000 dragon years or 1-2 Earth years)"
      }
    ];
    setTeamMembers(teamMembers);
  }, []);

  return (
    <div id="developstages" className="our-team feature-class pt-3 pb-5">
      <Container className="mt-5">
        <div className="text-center" style={{ marginBottom: -5 }}>
          <span className="text-black font-bold font-xxxl">Dragons Will Develop In 4 Stages</span>
        </div>
        <Row className="our-team-members mt-5">
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
                  <div className="text-center text-black font-bold font-un" style={{padding: "10px 18px"}}>
                    {member.description}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="text-center" style={{ marginBottom: -5 }}>
          <span className="text-black font-bold font-lgr">
            At each stage dragons will gain more abilities and special traits. We plan to market and provide content for Earthlings of all ages, with our first content ventures using the two baby dragons.
          </span>
        </div>
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
