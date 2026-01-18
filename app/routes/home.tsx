import "./home.css";
import { Link } from "react-router";
import YouTubeEmbed from "~/components/YouTubeEmbed";
export default function Home() {
  return (
    <>
      <main className="home-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-flex-container">
            <div className="hero-text">
              <p className="hero-greeting">Hello😄! I'm</p>
              <h1 className="hero-title">Alexander Yao</h1>
              <p className="hero-description">
                I'm a Junior studying computer science @ University of Maryland, College Park. I am an aspiring software engineer and full stack developer
                with a passion for building impactful applications and exploring new technologies!
              </p>
              <p className="hero-cta">
                I'm currently doing research @ George Mason University. In my free time I enjoy filming/editing videos, playing video games, and exploring new music! You can find my <a href="/portfolio/resume.pdf" className="internal-link">resume here</a>.
              </p>
            </div>
            
            <div className="hero-image-container">
              <img src="./profile.jpg" alt="Alexander Yao Profile" className="profile-circle" />
            </div>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="info-section">
          <h2 className="section-label">Featured Work</h2>
          
          <div className="featured-project-card">
            <div className="card-top">
              <div className="card-titles">
                <h3>Personal Portfolio</h3>
                <p>A minimalist, dark-mode first portfolio site built to showcase technical projects and video editing hobbies.</p>
              </div>
              <a href="https://github.com/alexyao2/portfolio" target="_blank" rel="noreferrer" title="View Source" className="card-icon">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            
            <ul className="tech-tags-minimal">
              <li>React Router v7</li>
              <li>TypeScript</li>
              <li>CSS Modules</li>
            </ul>
          </div>
          
          <Link to="/projects" className="view-all-link">View all projects →</Link>
        </section>
        {/* Skills Section */}
        <section className="info-section">
          <h2 className="section-label">Skills</h2>
          <div className="technical-skills-grid">
            <div className="skill-item">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C / C++</li>
                <li>HTML & CSS</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3>Frameworks & Libraries</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>Pandas</li>
              </ul>
            </div>
            <div className="skill-item">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>VS Code</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Miscellaneous Section */}
        <section className="info-section">
          <h2 className="section-label">Miscellaneous!</h2>
          <div className="skills-grid misc-grid">
            {/* Video & Photo Column */}
            <div className="misc-column media-column">
              <h3>Photo & Video</h3>
              <p>Some past and current work</p>
              <div className="featured-project-card">
                <div className="card-top">
                  <p>Featured:</p>
                  <a href="https://www.youtube.com/@yaotub3" target="_blank" rel="noreferrer" title="YouTube Channel" className="card-icon">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.72 29.72 0 0 0 1 12a29.72 29.72 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.72 29.72 0 0 0 23 12a29.72 29.72 0 0 0-.46-5.58zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"></path>
                    </svg>
                  </a>
                </div>

                <YouTubeEmbed 
                  videoId="d-VbD_ADaEs" 
                  title="Summer Vlog 2025" 
                />
                
                <ul className="tech-tags-minimal">
                  <li>Premier Pro</li>
                  <li>After Effects</li>
                </ul>
              </div>
              <Link to="/interests" className="view-all-link">View other interests →</Link>
            </div>
            
            {/* TFT Column */}
            <div className="misc-column tft-column">
              <h3>TFT</h3>
              <p>My current progress in Set 16!</p>
              <div className="featured-project-card tft-card">
                <div className="card-top">
                  <a href="https://teamfighttactics.leagueoflegends.com/en-us/news/game-updates/what-is-teamfight-tactics/" target="_blank" rel="noreferrer" className="tft-banner-link">
                    <img src="./tft.jpg" alt="TFT Logo" className="tft-logo" />
                  </a>

                  <div className="tft-header-right">
                    <p>Ranked</p>
                    <a href="https://www.metatft.com/player/na/yaom3ister23-NA1" target="_blank" rel="noreferrer" title="MetaTFT Profile" className="card-icon">
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="tft-embed-content">
                  <div className="rank-emblem-wrapper">
                    <img src="./tft-rank.png" alt="TFT Rank" className="tft-rank-image" />
                  </div>
                  
                  <div className="rank-stats">
                    <div className="stat-item">
                      <span className="stat-label">Rank</span>
                      <span className="stat-value">Masters</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">LP</span>
                      <span className="stat-value">0 LP</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Top 4 Rate</span>
                      <span className="stat-value">70%</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Win Rate</span>
                      <span className="stat-value">20%</span>
                    </div>
                    <div className="stat-item match-history-row">
                      <span className="stat-label">Last 5</span>
                      <div className="placement-list">
                        <span className="placement bot-4">7</span>
                        <span className="placement top-2">2</span>
                        <span className="placement top-2">2</span>
                        <span className="placement top-1">1</span>
                        <span className="placement bot-4">5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="tech-tags-minimal">
                  <li>MetaTFT</li>
                  <li>Set 16</li>
                  <li>NA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p>Personal website & portfolio by Alexander Yao.</p>
            <p className="footer-subtext">Built with React Router v7 & hosted on GitHub Pages.</p>
            <p className="copyright">© {new Date().getFullYear()} Alexander Yao. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="/" className="footer-site-link">alexyao2.github.io/portfolio</a>
            <div className="footer-socials">
              <a href="https://x.com/yaom3ister">Twitter</a>
              <a href="https://github.com/alexyao2">GitHub</a>
              <a href="https://www.linkedin.com/in/alexyao2">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}