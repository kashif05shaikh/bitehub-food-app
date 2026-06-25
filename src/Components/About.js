import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-hero">
          <div className="about-hero-inner">
            <span className="about-badge">👨‍💻 Developer</span>
            <h1>About Us</h1>
            <p>Building delightful food experiences, one component at a time.</p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-profile-card">
            <div className="about-avatar-wrap">
              <img
                src="https://avatars.githubusercontent.com/u/236854170?v=4"
                alt="Kashif Shaikh"
                className="about-avatar"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="about-avatar-fallback">KS</div>
            </div>
            <div className="about-profile-info">
              <h2>Kashif Shaikh</h2>
              <span className="about-role">Frontend Developer</span>
              <div className="about-meta">
                <span>📍 Mumbai, India</span>
                <span>✉️ kashif05.shaikh@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-icon">🚀</div>
              <h3>The Project</h3>
              <p>
                A full-featured BiteHub built with React, Redux Toolkit,
                and live API integration. Designed to mirror a real-world
                production app with routing, cart, and dynamic menus.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-icon">⚡</div>
              <h3>Tech Stack</h3>
              <ul className="about-tech-list">
                <li><span className="tech-dot react" />React 19</li>
                <li><span className="tech-dot redux" />Redux Toolkit</li>
                <li><span className="tech-dot router" />React Router v6</li>
                <li><span className="tech-dot parcel" />Parcel Bundler</li>
              </ul>
            </div>

            <div className="about-card">
              <div className="about-card-icon">🎓</div>
              <h3>Inspiration</h3>
              <p>
                Built while learning from Akshay Saini's{" "}
                <strong>Namaste React</strong> course — a deep dive into
                React internals, custom hooks, and real API integration.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">20+</span>
              <span className="stat-label">Components</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Live</span>
              <span className="stat-label">Swiggy API</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Redux</span>
              <span className="stat-label">State Mgmt</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Responsive</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;