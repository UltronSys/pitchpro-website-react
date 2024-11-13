import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const genFeatureMainImage = require("../assets/images/1185x1476.png");

const featuresLeft = [
  {
    id: 1,
    icon: "las la-paw",
    title: "Easy Pitch Booking",
    desc: "Book your football pitch in seconds, with secure payment options all within the app",
  },
  {
    id: 2,
    icon: "las la-bell",
    title: "Instant Notifications",
    desc: "Get real-time updates, session reminders, and payment alerts so you never miss a game.",
  },
  {
    id: 3,
    icon: "las la-copy",
    title: "Create & Share Sessions",
    desc: "Create a football session and instantly send booking links to your friends—no hassle, just play.",
  },
];

const featuresRight = [
  {
    id: 1,
    icon: "las la-comment-dots",
    title: "Single Booking",
    desc: "Book a pitch for yourself and pay the full session price, making it quick and easy for players",
  },
  {
    id: 2,
    icon: "las la-share-square",
    title: "Private Booking",
    desc: "Create a private session, invite your friends, and have everyone pay for the session directly through the app.",
  },
  {
    id: 3,
    icon: "las la-layer-group",
    title: "Permanent Booking",
    desc: "Secure a regular spot for your football sessions by booking a pitch permanently.",
  },
];

const GeneralFetures = () => {
  return (
    <section className="sp-t" id="features">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Awesome Features</p>
              </div>
              <div className="heading-title">
                <h2>
                  Check out some of our
                  <br />
                  amazingly crafted features
                </h2>
              </div>
              <div className="heading-description">
                <p>
                  Discover the powerful features that make booking and playing
                  football easier than ever.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* - Features Data Display - */}
          <Col lg={4}>
            {(featuresLeft || []).map((feature) => (
              <div key={feature.id} className="iconbox-secondary mb-4">
                <div className="item-icon me-4">
                  <i className={feature.icon}></i>
                </div>
                <div className="item-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </Col>
          {/* - Features Data Display - */}

          {/* - Features Image - */}
          <Col lg={4} className="my-lg-0 my-5">
            <div className="feature-mobile-image">
              <img src={genFeatureMainImage} alt="Feature 01" />
            </div>
          </Col>
          {/* - Features Image - */}

          {/* - Features Data Display - */}
          <Col lg={4}>
            {(featuresRight || []).map((feature) => (
              <div key={feature.id} className="iconbox-secondary mb-4">
                <div className="item-icon me-4">
                  <i className={feature.icon}></i>
                </div>
                <div className="item-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </Col>
          {/* - Features Data Display - */}
        </Row>
      </Container>
    </section>
  );
};

export default GeneralFetures;
