import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        lineHeight: "1.6",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "#1a73e8",
        }}
      >
        PRIVACY POLICY
      </h1>
      <p
        style={{
          fontSize: "12px",
          color: "#888",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Last updated September 30, 2024
      </p>

      <p style={{ marginBottom: "20px" }}>
        This Privacy Notice for Pitchpro Limited ("we", "us", or "our")
        describes how and why we might access, collect, store, use, and/or share
        ("process") your personal information when you use our services
        ("Services"), including when you:
      </p>
      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "disc",
        }}
      >
        <li>
          Download and use our mobile application (Pitch Pro), or any other
          application of ours that links to this Privacy Notice
        </li>
        <li>
          Engage with us in other related ways, including any sales, marketing,
          or events
        </li>
      </ul>

      <p style={{ marginBottom: "20px" }}>
        Questions or concerns? This Privacy Notice will help you understand your
        privacy rights and choices. If you have any questions, please contact us
        at
        <a
          href="mailto:pitchprolimited@gmail.com"
          style={{ color: "#1a73e8", textDecoration: "none" }}
        >
          {" "}
          pitchprolimited@gmail.com
        </a>
        .
      </p>

      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        SUMMARY OF KEY POINTS
      </h2>
      <p style={{ marginBottom: "20px" }}>
        This summary provides key points from our Privacy Notice. You can find
        out more details by clicking the links following each key point.
      </p>

      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        TABLE OF CONTENTS
      </h2>
      <ol
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "decimal",
        }}
      >
        {[
          "WHAT INFORMATION DO WE COLLECT?",
          "HOW DO WE PROCESS YOUR INFORMATION?",
          "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
          "HOW LONG DO WE KEEP YOUR INFORMATION?",
          "HOW DO WE KEEP YOUR INFORMATION SAFE?",
          "WHAT ARE YOUR PRIVACY RIGHTS?",
          "CONTROLS FOR DO-NOT-TRACK FEATURES",
          "DO WE MAKE UPDATES TO THIS NOTICE?",
          "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
          "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
        ].map((section, index) => (
          <li key={index}>
            <a
              href={`#section${index + 1}`}
              style={{ color: "#1a73e8", textDecoration: "underline" }}
            >
              {section}
            </a>
          </li>
        ))}
      </ol>

      {/* Detailed Sections */}
      <h2
        id="section1"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        1. WHAT INFORMATION DO WE COLLECT?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        Personal information you disclose to us. <br />
        <strong>In Short:</strong> We collect personal information that you
        provide to us.
      </p>
      <p style={{ marginBottom: "20px" }}>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products, or otherwise when you contact us.
      </p>
      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "disc",
        }}
      >
        <li>names</li>
        <li>phone numbers</li>
        <li>email addresses</li>
      </ul>

      <h2
        id="section2"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> We process your information to provide,
        improve, and administer our Services, communicate with you, for security
        and fraud prevention, and to comply with the law.
      </p>
      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "disc",
        }}
      >
        <li>To facilitate account creation and manage user accounts</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2
        id="section3"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> We may share information in specific
        situations described in this section.
      </p>
      <ul
        style={{
          paddingLeft: "20px",
          marginBottom: "20px",
          listStyleType: "disc",
        }}
      >
        <li>
          Business Transfers: In connection with any merger, sale, or
          acquisition.
        </li>
      </ul>

      <h2
        id="section4"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        4. HOW LONG DO WE KEEP YOUR INFORMATION?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> We keep your information for as long as
        necessary to fulfill purposes outlined in this Privacy Notice.
      </p>

      <h2
        id="section5"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        5. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> We aim to protect your information with
        technical and organizational measures.
      </p>

      <h2
        id="section6"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        6. WHAT ARE YOUR PRIVACY RIGHTS?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> You may review, change, or terminate your
        account at any time.
      </p>

      <h2
        id="section7"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        7. CONTROLS FOR DO-NOT-TRACK FEATURES
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> We do not currently respond to DNT signals.
      </p>

      <h2
        id="section8"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        8. DO WE MAKE UPDATES TO THIS NOTICE?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        <strong>In Short:</strong> Yes, we will update this notice as necessary
        to stay compliant with laws.
      </p>

      <h2
        id="section9"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        If you have questions, please email us at
        <a
          href="mailto:pitchprolimited@gmail.com"
          style={{ color: "#1a73e8", textDecoration: "none" }}
        >
          {" "}
          pitchprolimited@gmail.com
        </a>
        .
      </p>

      <h2
        id="section10"
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "24px",
          marginBottom: "16px",
          color: "#1a73e8",
        }}
      >
        10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </h2>
      <p style={{ marginBottom: "20px" }}>
        You may request to review, update, or delete your personal information
        by emailing us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
