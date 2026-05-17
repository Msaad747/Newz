/**
 * About Component - About Us Page
 * 
 * Displays information about Newzify application including:
 * - App description and mission
 * - Team information
 * - Features overview
 * - Contact information
 * - Dark/Light theme support
 */

import React from "react";

/**
 * About Component - About Page
 * @param {Object} props - Contains isDark flag for theme
 * @returns {JSX.Element} About page content
 */
export default function About(props) {
  return (
    <>
      <div
        className=""
        style={{
          fontFamily: "Times New Roman",
          padding: "35px",
          lineHeight: "1.8",
        }}
      >
        <hr
          className={`${props.isDark ? "bg-light opacity-50" : "bg-dark opacity-50"} border-2`}
        />
        <h2 className="text-center my-4">
          <button
            className={`btn ${
              props.isDark ? "btn-outline-light" : "btn-outline-dark"
            } fs-4`}
            style={{ cursor: "default" }}
          >
            ❓ About Us
          </button>
        </h2>

        <div
          className={`container my-4 ${props.isDark ? "text-light" : "text-dark"}`}
          style={{ maxWidth: "900px" }}
        >
          <section className="mb-5">
            <h4 className="fw-bold mb-3">🌟 Welcome to Newzify</h4>
            <p>
              Newzify is your go-to source for breaking news, in-depth analysis,
              and comprehensive news coverage from around the globe. Our mission
              is to deliver reliable, timely, and engaging news content that
              keeps you informed about the world around you.
            </p>
            <p>
              In an era of information overload, we believe in curating
              high-quality news from trusted sources and presenting it in an
              accessible, user-friendly format. Whether you're interested in
              politics, business, technology, health, entertainment, or sports,
              Newzify brings you the stories that matter.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-bold mb-3">🎯 Our Mission</h4>
            <p>
              To empower people with accurate, timely, and diverse news content
              that enables them to make informed decisions about the world. We
              are committed to:
            </p>
            <ul>
              <li>
                <strong>Accuracy:</strong> Delivering verified information from
                reputable news sources
              </li>
              <li>
                <strong>Speed:</strong> Providing real-time updates on breaking
                news and events
              </li>
              <li>
                <strong>Diversity:</strong> Covering multiple perspectives and
                topics across all sectors
              </li>
              <li>
                <strong>Accessibility:</strong> Making news digestible and
                available to everyone
              </li>
              <li>
                <strong>Innovation:</strong> Continuously improving our platform
                with cutting-edge technology
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h4 className="fw-bold mb-3">✨ Key Features</h4>
            <ul>
              <li>
                <strong>Multi-Category Coverage:</strong> Stay updated across
                General News, Business, Entertainment, Health, Science, Sports,
                and Technology categories
              </li>
              <li>
                <strong>Advanced Search:</strong> Find specific news articles
                with our powerful search functionality
              </li>
              <li>
                <strong>Real-Time Updates:</strong> Get the latest news as it
                happens with our infinite scroll feature
              </li>
              <li>
                <strong>Dark Mode:</strong> Read comfortably in any lighting
                condition with our dark and light theme options
              </li>
              <li>
                <strong>Responsive Design:</strong> Access Newzify seamlessly on
                desktop, tablet, or mobile devices
              </li>
              <li>
                <strong>Source Attribution:</strong> Always know the source of
                each article with clear source citations
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h4 className="fw-bold mb-3">🔧 Technology Behind Newzify</h4>
            <p>
              Newzify is built with modern web technologies to ensure fast
              performance and reliability:
            </p>
            <ul>
              <li>
                <strong>React.js:</strong> Dynamic and responsive user interface
              </li>
              <li>
                <strong>NewsAPI.org:</strong> Integration with one of the
                world's leading news data providers
              </li>
              <li>
                <strong>Bootstrap 5:</strong> Professional and responsive design
                framework
              </li>
              <li>
                <strong>JavaScript (ES6+):</strong> Modern JavaScript for
                optimal performance
              </li>
              <li>
                <strong>Infinite Scroll:</strong> Seamless pagination for
                continuous browsing
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h4 className="fw-bold mb-3">👨‍💼 Our Team</h4>
            <p>
              Newzify is developed and maintained by a passionate team dedicated
              to delivering the best news experience. We are constantly working
              to improve our platform, add new features, and bring you the
              latest stories from around the world.
            </p>
            <p>
              Our team consists of experienced developers, news curators, and
              technology enthusiasts who are committed to the mission of keeping
              you informed.
            </p>
          </section>

          <section className="mb-5">
            <h4 className="fw-bold mb-3">📊 News Categories Covered</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
              }}
            >
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>🌍 General</strong>
                <br />
                Breaking news and top stories
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>💼 Business</strong>
                <br />
                Market trends and corporate news
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>🎬 Entertainment</strong>
                <br />
                Celebrity and media updates
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>🏥 Health</strong>
                <br />
                Medical and wellness information
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>🔬 Science</strong>
                <br />
                Scientific discoveries and research
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>⚽ Sports</strong>
                <br />
                Athletic events and updates
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>💻 Technology</strong>
                <br />
                Tech innovations and gadgets
              </div>
              <div
                className={`p-3 rounded ${props.isDark ? "bg-secondary bg-opacity-25" : "bg-light border"}`}
              >
                <strong>🔍 Everything</strong>
                <br />
                Custom search across all sources
              </div>
            </div>
          </section>

          <hr
            className={
              props.isDark ? "bg-light opacity-25" : "bg-dark opacity-25"
            }
          />

          <section className="mb-5">
            <h4 className="fw-bold mb-4 text-center">📞 Get In Touch</h4>
            <div className={`container accordion`} id="accordionExample">
              <div
                className={`accordion-item ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"} border`}
              >
                <h2 className={`accordion-header `}>
                  <button
                    className={`accordion-button dark-arrow collapsed ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"} `}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    📞 Phone
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <strong>+92 330-6961412</strong>
                    <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                      Available Monday to Friday, 9 AM - 5 PM (PKT)
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-item ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"} border`}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button dark-arrow collapsed ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    📧 Email
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <strong>
                      <a
                        href="mailto:saadhunter007@gmail.com"
                        style={{
                          color: props.isDark ? "#0dcaf0" : "#0d6efd",
                          textDecoration: "none",
                        }}
                      >
                        saadhunter007@gmail.com
                      </a>
                    </strong>
                    <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-item ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"} border`}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button dark-arrow collapsed ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    💼 LinkedIn
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p style={{ fontSize: "0.9rem" }}>
                      Currently building our professional network. Stay tuned
                      for our LinkedIn profile launch!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`accordion-item ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"} border`}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button dark-arrow  collapsed ${props.isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    💬 Feedback & Suggestions
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>
                      We love hearing from our users! Have a suggestion or found
                      a bug? Email us your feedback at
                      <a
                        href="mailto:saadhunter007@gmail.com"
                        style={{
                          color: props.isDark ? "#0dcaf0" : "#0d6efd",
                          textDecoration: "none",
                          marginLeft: "5px",
                        }}
                      >
                        saadhunter007@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5 text-center">
            <h5 className="fw-bold mb-3">🤝 Partnership & Support</h5>
            <p>
              Newzify is powered by{" "}
              <a
                href="https://newsapi.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: props.isDark ? "#0dcaf0" : "#0d6efd",
                  textDecoration: "none",
                }}
              >
                NewsAPI.org
              </a>
              , ensuring we bring you the most reliable and up-to-date news from
              trusted sources worldwide.
            </p>
          </section>
        </div>
      </div>
      <hr
        className={`${props.isDark ? "bg-light opacity-50" : "bg-dark opacity-50"} border-2`}
      />
    </>
  );
}
