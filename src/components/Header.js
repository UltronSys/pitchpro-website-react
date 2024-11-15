import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const logoImage = require("../assets/images/logo.png");

const navItems = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Features", path: "#features" },
  // { title: "Pricing", path: "#pricing" },
  { title: "Testimonials", path: "#testimonials" },
  { title: "Blogs", path: "#blogs" },
  { title: "Contact", path: "#contact" },
];

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleNavigation = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      handleScroll();
    });

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* - Site Header - */}
      <header
        className={`site-header d-lg-block d-none ${
          scrolling ? "sticky-header" : ""
        }`}
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="header-content">
                {/* - Header Left - */}
                <div className="header-left">
                  <div className="site-logo">
                    <a href="#home">
                      <img src={logoImage} alt="Site Logo" />
                    </a>
                  </div>
                </div>
                {/* - Header Left - */}

                {/* - Header Right - */}
                <div className="header-right">
                  <div className="site-navigation">
                    <ul>
                      {(navItems || []).map((item) => (
                        <li key={item.path}>
                          <a href={item.path}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ms-4">
                    <Link to="#" className="anchor-button secondary button-sm">
                      Download Now!
                    </Link>
                  </div>
                </div>
                {/* - Header Right - */}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {/* - Site Header - */}

      {/* - Site Mobile Header - */}
      <header
        className={`site-mobile-header d-block d-lg-none ${
          scrolling ? "sticky-header" : ""
        }`}
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="header-content">
                {/* - Header Left - */}
                <div className="header-left">
                  <div className="site-logo">
                    <a href="#home">
                      <img
                        src={logoImage}
                        alt="Site Logo"
                        onClick={handleNavigation}
                      />
                    </a>
                  </div>
                </div>
                {/* - Header Left - */}

                {/* - Header Right - */}
                <div className="header-right">
                  <div className="me-4">
                    <Link to="#" className="anchor-button secondary button-sm">
                      Download Now!
                    </Link>
                  </div>
                  <div className="mobile-nav-toggle" onClick={handleNavigation}>
                    <i className="las la-bars"></i>
                  </div>
                </div>
                {/* - Header Right - */}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {/* - Site Mobile Header - */}

      {/* - Mobile Navigation - */}
      <div className={`mobile-navigation-wrap p-4 ${openNav ? "show" : ""}`}>
        <div className="nav-header">
          <i
            className="las la-times-circle hide-mobile-nav"
            onClick={handleNavigation}
          ></i>
        </div>

        {/* - Navigation Items - */}
        <div className="mobile-nav">
          <ul>
            {(navItems || []).map((item) => (
              <li key={item.path}>
                <a href={item.path} onClick={handleNavigation}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* - Navigation Items - */}
      </div>
      {/* - Mobile Navigation - */}
    </>
  );
};

export default Header;
