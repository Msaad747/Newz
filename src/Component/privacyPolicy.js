import React from "react";

export default function PrivacyPolicy(props) {
  return (
    <div
      className={` d-flex flex-column  ${
        props.isDark ? "text-light" : "text-dark"
      }`}
      style={{ fontFamily: "Times New Roman", padding: "35px", lineHeight: "1.8" }}
    >
      <div className="text-center mt-1 mb-3">
        <button
          className={`btn ${props.isDark ? "btn-outline-light" : "btn-outline-dark"} fs-4 mb-3 `}
          style={{ cursor: "default" }}
        >
          🔒 Privacy Policy
        </button>
        <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>Last Updated: May 16, 2026</p>
      </div>
      <hr />

      <div
        className="text-start"
        style={{
          cursor: "default",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <section className="mb-4">
          <h5 className="fw-bold mb-2">1. Introduction</h5>
          <p>
            Newzify ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site"), use our services, and access our content.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site. By accessing and using Newzify, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">2. Information We Collect</h5>
          <p className="fw-semibold mb-2">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, and any other information you voluntarily provide through forms or contact methods.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, searches, and browsing patterns.</li>
            <li><strong>Cookies and Similar Technologies:</strong> Data collected through cookies, web beacons, and similar tracking technologies.</li>
            <li><strong>Location Data:</strong> Approximate geographic location based on IP address or other technologies.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">3. How We Use Your Information</h5>
          <p>Newzify uses the information we collect for various purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our services and content delivery</li>
            <li>To personalize your experience and deliver content tailored to your interests</li>
            <li>To monitor and analyze usage patterns and trends</li>
            <li>To display targeted advertisements and content</li>
            <li>To detect, prevent, and address fraudulent activity and security issues</li>
            <li>To comply with legal obligations and enforce our terms of service</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you updates, newsletters, and promotional materials (with your consent)</li>
          </ul>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">4. Cookies and Tracking Technologies</h5>
          <p>
            Our Site uses cookies and similar tracking technologies to enhance your user experience. Cookies are small data files that are stored on your device. We use both session-based and persistent cookies for various purposes:
          </p>
          <ul>
            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> Long-term cookies that remain on your device until deleted.</li>
            <li><strong>Third-Party Cookies:</strong> Placed by our advertising and analytics partners.</li>
          </ul>
          <p>
            You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of the Site.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">5. Third-Party Services and Advertising</h5>
          <p>
            We may use third-party services such as Google AdSense and other advertising networks to deliver personalized advertisements on our Site. These services may:
          </p>
          <ul>
            <li>Use cookies and tracking technologies to collect information about your browsing activities</li>
            <li>Display targeted advertisements based on your interests and behavior</li>
            <li>Track conversion rates and advertising effectiveness</li>
            <li>Share anonymized data with analytics partners</li>
          </ul>
          <p>
            Third-party service providers have their own privacy policies, and we are not responsible for their practices. We encourage you to review their privacy policies independently.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">6. Data Security</h5>
          <p>
            We implement reasonable technical, administrative, and physical security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no security system is impenetrable, and we cannot guarantee absolute security. Your use of the Site is at your own risk.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">7. Your Privacy Rights</h5>
          <p className="fw-semibold mb-2">Depending on your location, you may have the following rights:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request what personal data we hold about you</li>
            <li><strong>Right to Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Right to Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
            <li><strong>Right to Opt-Out:</strong> Opt-out of personalized advertising and marketing communications</li>
            <li><strong>Right to Data Portability:</strong> Request your data in a portable format</li>
          </ul>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">8. Children's Privacy</h5>
          <p>
            Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will promptly delete such information and terminate the child's use of the Site.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">9. International Data Transfers</h5>
          <p>
            Your information may be transferred to, stored in, and processed in countries other than your country of residence, which may have data protection laws that differ from your country. By using our Site, you consent to such transfers.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">10. Changes to This Privacy Policy</h5>
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site following the posting of revised Privacy Policy means you accept and agree to the changes. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section className="mb-4">
          <h5 className="fw-bold mb-2">11. Contact Us</h5>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, our privacy practices, or wish to exercise your privacy rights, please contact us at:
          </p>
          <p className="fw-semibold">
            📧 Email: <a href="mailto:saadhunter007@gmail.com" style={{ color: props.isDark ? "#0dcaf0" : "#0d6efd" }}>saadhunter007@gmail.com</a>
          </p>
          <p style={{ fontSize: "0.9rem", marginTop: "15px" }}>
            We will respond to your request within thirty (30) business days.
          </p>
        </section>

        <hr className="my-4" />
        <p style={{ fontSize: "0.85rem", fontStyle: "italic" }}>
          This Privacy Policy is provided for your protection. By using Newzify, you acknowledge your understanding and acceptance of this policy. Thank you for trusting us with your privacy.
        </p>
      </div>
    </div>
  );
}
