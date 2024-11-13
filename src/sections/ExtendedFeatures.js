import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const extFeatureImage01 = require("../assets/images/1320x1198.png");
const extFeatureImage02 = require("../assets/images/instant.png");

const extFeturesTop = [
  {
    id: 1,
    icon: "las la-paw",
    title: "View Nearby Pitches",
    desc: "Quickly find nearby available pitches and see the distance from your location.",
  },
  {
    id: 2,
    icon: "las la-layer-group",
    title: "Extended Pitch Details",
    desc: "Click on any pitch to view detailed information, e.g amenities and pricing, before making your booking",
  },
];

const extFeaturesLists = [
  {
    id: 1,
    desc: "Book your pitch in seconds and get ready to play without delays.",
  },
  {
    id: 2,
    desc: "Top up your wallet or pay for a session, and see instant payment confirmation.",
  },
];

const ExtendedFeatures = () => {
  return (
    <section className="sp-t">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Extended Features</p>
              </div>
              <div className="heading-title">
                <h2>Simple, Yet Powerful Features</h2>
              </div>
              <div className="heading-description">
                <p>
                  Discover features that make booking and playing football
                  faster and easier.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        {/* - Feature Content - */}
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="extended-feature-content mb-lg-0 mb-5">
              <div className="mb-4">
                <h3>Find Your Pitch</h3>
                <p>
                  Easily locate nearby pitches and view all the details before
                  booking.
                </p>
              </div>

              {(extFeturesTop || []).map((feature) => (
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
            </div>
          </Col>
          {/* - Feature Content - */}

          {/* - Feature Image - */}
          <Col lg={7}>
            <div className="extended-feature-image">
              <img src={extFeatureImage01} alt="Feature 02" />
            </div>
          </Col>
          {/* - Feature Image - */}
        </Row>

        <Row className="align-items-center sp-t">
          {/* - Feature Image - */}
          <Col lg={7} className="order-2 order-lg-1">
            <div className="list-feature-image">
              <img src={extFeatureImage02} alt="Feature 03" />
            </div>
          </Col>
          {/* - Feature Image - */}

          {/* - Feature Content - */}
          <Col lg={5} className="order-1 order-lg-2">
            <div className="extended-feature-content mb-lg-0 mb-5">
              <div className="mb-4">
                <h3>Instant Action</h3>
                <p>
                  Book and pay for your football sessions in real-time, with
                  everything happening instantly at your fingertips.
                </p>
              </div>

              {(extFeaturesLists || []).map((list) => (
                <div key={list.id} className="d-flex iconbox-list mb-4">
                  <div className="item-icon me-4">
                    <i className="las la-check-circle"></i>
                  </div>
                  <div className="item-content">
                    <p>{list.desc}</p>
                  </div>
                </div>
              ))}

              <div className="mt-5">
                <Link to="#" className="anchor-button primary button-lg">
                  Read More
                </Link>
              </div>
            </div>
          </Col>
          {/* - Feature Content - */}
        </Row>
      </Container>
    </section>
  );
};

export default ExtendedFeatures;
