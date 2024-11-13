import React from "react";
import { Row, Col } from "react-bootstrap";

const ceoImage = require("../assets/images/kenya.png");

const CeoMessage = () => {
  return (
    <div className="ceo-message-wrap p-5">
      <Row className="align-items-center">
        <Col lg={5} className="mb-lg-0 mb-4">
          {/* - CEO Inmage - */}
          <div className="ceo-image">
            <img
              src={ceoImage}
              alt="CEO"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* - CEO Inmage - */}
        </Col>

        <Col lg={7}>
          {/* - CEO Message Text - */}
          <div className="ceo-message-content ms-lg-4">
            <div className="ceo-message-text mb-4">
              “At Pitch Pro, we’re driven by a passion to make football more
              accessible, empowering players to connect with the game they
              love—anytime, anywhere.”
            </div>
            {/* <div className="meta">
              <div>
                <strong>Bellal Dhar</strong>
              </div>
              <div>Ceo & Founder</div>
            </div> */}
          </div>
          {/* - CEO Message Text - */}
        </Col>
      </Row>
    </div>
  );
};

export default CeoMessage;
