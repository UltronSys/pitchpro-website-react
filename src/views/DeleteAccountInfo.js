import React from "react";

const DeleteAccountInfo = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#f9fafb" }}>
      <div
        style={{
          maxWidth: "768px",
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            color: "#dc2626",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Delete Your Account
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#374151",
            marginBottom: "1.5rem",
          }}
        >
          We're sorry to see you go! Deleting your account is a permanent action
          and cannot be undone. By proceeding, the following data associated
          with your account will be deleted:
        </p>

        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "1rem",
            fontSize: "1.125rem",
            color: "#1f2937",
            marginBottom: "1.5rem",
          }}
        >
          {["Username", "Names", "Email Address", "Phone Number"].map(
            (item, index) => (
              <li key={index} style={{ fontWeight: "600" }}>
                {item}
              </li>
            )
          )}
        </ul>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#374151",
            marginBottom: "1.5rem",
          }}
        >
          If you're sure you want to delete your account, simply follow these
          steps:
        </p>

        <ol
          style={{
            listStyleType: "decimal",
            paddingLeft: "1rem",
            fontSize: "1.125rem",
            color: "#1f2937",
            marginBottom: "1.5rem",
          }}
        >
          {[
            "Navigate to your Profile Page.",
            "Click on the Delete Account tab.",
            "Confirm your decision to permanently delete your account.",
          ].map((step, index) => (
            <li key={index} style={{ fontWeight: "600" }}>
              {step}
            </li>
          ))}
        </ol>

        <div
          style={{
            backgroundColor: "#fee2e2",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#dc2626", fontWeight: "600" }}>
            Once your account is deleted, all your data will be permanently
            removed and cannot be recovered.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#dc2626",
              color: "#ffffff",
              fontWeight: "bold",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
              border: "none",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#b91c1c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#dc2626")}
          >
            Go to Profile Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountInfo;
