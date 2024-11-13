import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const bannerImage = require("../assets/images/1470x2020.png");
const appStore = require("../assets/images/app-store.png");
const playStore = require("../assets/images/google-play.png");

const SiteBanner = () => {
  return (
    <section className="site-banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            {/* - Banner Heading - */}
            <div className="banner-heading">
              <div className="banner-text mb-4">
                <div className="banner-title">
                  <h1>
                    Find Pitch <br />
                    Play More. <br />
                    Search Less.
                  </h1>
                </div>
                <div className="banner-description">
                  <p>
                    With Pitch Pro, booking football pitches
                    <br />
                    nearby is as easy as a tap. Ready to play?
                  </p>
                </div>
              </div>

              <div className="banner-download-buttons">
                <Link to="https://apps.apple.com/us/app/pitchpro-app/id6736767433?platform=iphone">
                  <img src={appStore} alt="App Store" />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=com.ultronsys.pitchpro&pcampaignid=web_share">
                  <img src={playStore} alt="Play Store" />
                </Link>
              </div>
            </div>
            {/* - Banner Heading - */}
          </Col>

          <Col lg={6} className="mt-lg-0 mt-5 d-lg-block d-none">
            {/* - Banner Image - */}
            <div className="banner-image">
              <img src={bannerImage} alt="Mobile Banner" />
            </div>
            {/* - Banner Image - */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SiteBanner;
