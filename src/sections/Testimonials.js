import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    image: require("../assets/images/980x780.png"),
    testimonieText:
      "Pitch Pro made booking a football pitch so easy! I can find, book, and pay in minutes. It’s a game-changer!",
    avatar: require("../assets/images/266x286.png"),
    testimonieName: "Abdulrahman",
    indentity: "Kiji Turf Manager",
  },
  {
    id: 2,
    image: require("../assets/images/980x780.png"),
    testimonieText:
      "I love how quickly I can book pitches for our team. The app is so simple to use, and payment is seamless. Highly recommend!",
    avatar: require("../assets/images/266x286.png"),
    testimonieName: "Abdulrahman",
    indentity: "Kiji Turf Manager",
  },
  {
    id: 3,
    image: require("../assets/images/980x780.png"),
    testimonieText:
      "Pitch Pro has made organizing matches with friends a breeze. No more back-and-forth—just book and play!",
    avatar: require("../assets/images/266x286.png"),
    testimonieName: "Abdulrahman",
    indentity: "Kiji Turf Manager",
  },
];

const Testimonials = () => {
  const [imageSlider, setImageSlider] = useState();
  const [textSlider, setTextSlider] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="testimonials sp-t" id="testimonials">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Our Impact</p>
              </div>
              <div className="heading-title">
                <h2>People who already love us</h2>
              </div>
              <div className="heading-description">
                <p>
                  Join the growing community of players who trust Pitch Pro for
                  easy, fast, and hassle-free football bookings.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="testimonials-box p-5">
              <Row>
                <Col lg={5}>
                  {/* - Tesimononie Image Slider - */}
                  <Slider
                    {...settings}
                    asNavFor={textSlider}
                    ref={(slider1) => setImageSlider(slider1)}
                    fade={true}
                    className="testimonie-thumb-slider"
                  >
                    {(testimonialsData || []).map((testimonie) => (
                      <div key={testimonie.id}>
                        <img
                          src={testimonie.image}
                          alt={testimonie.testimonieName}
                        />
                      </div>
                    ))}
                  </Slider>
                  {/* - Tesimononie Image Slider - */}
                </Col>

                <Col lg={7} className="px-lg-5">
                  <div className="testie-quote">
                    <i className="las la-quote-left"></i>
                  </div>
                  {/* - Tesimononie Text Slider - */}
                  <Slider
                    {...settings}
                    asNavFor={imageSlider}
                    ref={(slider2) => setTextSlider(slider2)}
                    className="testimonial-slider"
                    dots={true}
                    focusOnSelect={true}
                    adaptiveHeight={true}
                  >
                    {(testimonialsData || []).map((testimonie) => (
                      <div key={testimonie.id}>
                        <div className="testimonie-text my-4">
                          “{testimonie.testimonieText}”
                        </div>
                        <div className="testimonie-meta d-flex align-items-center">
                          <div className="avatar">
                            <img
                              src={testimonie.avatar}
                              alt={testimonie.testimonieName}
                            />
                          </div>
                          <div className="info ms-4">
                            <strong>{testimonie.testimonieName}</strong>
                            <br />
                            <span>{testimonie.indentity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  {/* - Tesimononie Text Slider - */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
