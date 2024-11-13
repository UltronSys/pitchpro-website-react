import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const appStore = require("../assets/images/app-store.png");
const playStore = require("../assets/images/google-play.png");
const userStatck = require("../assets/images/749x211.png");

const Download = () => {
  return (
    <section>
      <Container>
        <div className="app-downlaod py-5 px-4">
          <Row className="align-items-center">
            {/* - Section Heading - */}
            <div className="section-heading white text-white text-center mb-4">
              <div className="sub-heading mb-2">Join the Others</div>
              <h2>Download the app now</h2>
              <p>
                Get started today—download Pitch Pro and book your next football
                session in seconds!
              </p>
            </div>
            {/* - Section Heading - */}

            {/* - Download Content - */}
            <div className="text-center">
              {/* <div className="download-stats">
                <div className="users-tack">
                  <img src={userStatck} alt="users-stacked" />
                </div>
                <div className="mt-2">5M+ Downloads</div>
              </div> */}
              <div className="download-buttons text-center mt-4">
                <Link to="https://apps.apple.com/us/app/pitchpro-app/id6736767433?platform=iphone">
                  <img src={appStore} alt="App Store" />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=com.ultronsys.pitchpro&pcampaignid=web_share">
                  <img src={playStore} alt="Play Store" />
                </Link>
              </div>
            </div>
            {/* - Download Content - */}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Download;
