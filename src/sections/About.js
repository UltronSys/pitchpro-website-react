import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CeoMessage from "../components/CeoMessage";

const aboutBoxes = [
  {
    id: 1,
    icon: "las la-download",
    title: "Download app",
    desc: "Download Pitch Pro now to easily book and pay for nearby football pitches!",
  },
  {
    id: 2,
    icon: "las la-user-shield",
    title: "Register yourself",
    desc: "Register now to book and  play at your favorite football pitches!",
  },
  {
    id: 3,
    icon: "las la-smile-beam",
    title: "Enjoy the app",
    desc: "Explore all the features and enjoy seamless game days with Pitch Pro!",
  },
];

const About = () => {
  return (
    <section className="sp-t" id="about">
      <Container>
        <Row>
          <Col lg={8} className="mb-5 mx-auto text-center">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Who we are?</p>
              </div>
              <div className="heading-title">
                <h2>Your Football Booking Partner</h2>
              </div>
              <div className="heading-description">
                <p>
                  Connecting you to nearby pitches with easy booking and secure
                  payment options.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        {/* - About Data Display - */}
        <Row>
          {(aboutBoxes || []).map((box) => (
            <Col key={box.id} lg={4} className="mb-lg-0 mb-4 text-center">
              <div className="iconbox-primary">
                <div className="item-icon mb-4">
                  <i className={box.icon}></i>
                </div>
                <div className="item-content">
                  <h3>{box.title}</h3>
                  <p>{box.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* - About Data Display - */}

        {/* - CEO Message - */}
        <Row className="mt-5">
          <Col md={12}>
            <CeoMessage />
          </Col>
        </Row>
        {/* - CEO Message - */}
      </Container>
    </section>
  );
};

export default About;
