import React from "react";

export default function PrivacyPolicy(props) {
  return (
    <div
      className={` d-flex flex-column  ${
        props.isDark ? "text-light" : "text-dark"
      }`}
      style={{ fontFamily: "Times New Roman", padding: "35px" }}
    >
      <div className="text-center mt-1 mb-1 ">
        <button
          className={`btn ${props.isDark ? "btn-outline-light" : "btn-outline-dark"} fs-4 mb-3 `}
          style={{ cursor: "default" }}
        >
          🔒 Privacy Policy
        </button>
      </div>
      <hr />

      <ul
        className="text-start"
        style={{
          cursor: "default",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <li>
          <p>
            This website uses cookies to improve user experience and display
            ads.
          </p>
        </li>
        <li>
          <p>
            We may use third-party services like Google AdSense which use
            cookies to show personalized advertisements.
          </p>
        </li>
        <li>
          <p>
            By using this site, you consent to the use of cookies and data
            collection.
          </p>
        </li>
        <li>
          <p>
            If you have any questions, contact us at: saadhunter007@gmail.com
          </p>
        </li>
      </ul>
    </div>
  );
}
