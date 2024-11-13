import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    categories: "Football",
    image: require("../assets/images/980x780.png"),
    title:
      "Top Football Pitches in Kenya: Where to Play and Practice Across the Country",

    date: "March 19, 2024",
  },
  {
    id: 2,
    categories: "Community",
    image: require("../assets/images/980x780.png"),
    title:
      "The Rise of Community Football Pitches in Kenya: A Grassroots Movement",
    date: "March 25, 2024",
  },
  {
    id: 3,
    categories: "Booking Football pitches",
    image: require("../assets/images/980x780.png"),
    title: "Booking a Football Pitch in Kenya: What to Know Before You Play",
    date: "April 04, 2024",
  },
];

const Blogs = () => {
  return (
    <section className="sp-tb" id="blogs">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Stay upto date</p>
              </div>
              <div className="heading-title">
                <h2>From the blog and articles</h2>
              </div>
              <div className="heading-description">
                <p>
                  The Best Part of Waking Up is Blog and articles in Your Cup.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        {/* - Blog Posts - */}
        <Row>
          {(blogData || []).map((blog) => (
            <Col key={blog.id} lg={4}>
              <div className="blog-single mb-lg-0 mb-4">
                <div className="blog-thumb-image">
                  <Link to="#">
                    <img src={blog.image} alt={blog.title} />
                  </Link>
                </div>
                <div className="mt-5">
                  <div>{blog.categories}</div>
                  <div className="blog-title my-4">
                    <h4>
                      <Link to="#">{blog.title}</Link>
                    </h4>
                  </div>
                  <div>{blog.date}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* - Blog Posts - */}
      </Container>
    </section>
  );
};

export default Blogs;
