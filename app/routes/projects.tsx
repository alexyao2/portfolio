//import type { Route } from "./+types/projects";
import "./projects.css";
import { Link } from "react-router";

export default function Projects() {
  const myProjects = [
    {
      title: "Trade War Monitor",
      description: "A Python pipeline collects energy, freight, and gold market indicators into SQLite. A React dashboard aligns sourced policy events with historical Brent prices, while the API provides rolling anomaly scores. The analysis is exploratory, not a forecast or a measure of causal impact.",
      tags: ["Python", "pandas", "SQLite", "FastAPI", "React", "TypeScript"],
      link: "https://github.com/alexyao2/trade-war-monitor",
    },
    {
      title: "NBA Referee Analytics",
      description: "An interactive application for comparing NBA referee statistics across seasons. Includes game-weighted averages, foul differentials, z-score comparisons, and a custom home-favorability score. These descriptive indicators do not establish referee bias.",
      tags: ["Python", "FastAPI", "React", "Docker Compose", "Nginx"],
      link: "https://github.com/alexyao2/nba-ref-analysis",
    },
    {
      title: "Video Performance Tracker",
      description: "A Python pipeline that collects YouTube and TikTok engagement metrics into SQLite and calculates normalized engagement rates for cross-platform comparisons.",
      tags: ["Python", "SQLite", "SQLAlchemy", "Playwright", "Docker"],
      link: "https://github.com/alexyao2/cross-platform-video-tracker",
    },
    {
      title: "Personal Website",
      description: "My personal website showcasing data projects, professional experience, and video editing interests.",
      tags: ["React Router", "TypeScript", "CSS"],
      link: "https://github.com/alexyao2/portfolio",
    },
    {
      title: "Racket Compiler",
      description: "A simple compiler for a subset of the Racket programming language, built using Racket and Assembly code.",
      tags: ["Racket", "x86 Assembly"],
      link: "https://github.com/alexyao2/compiler",
    }
    
  ];

  return (
    <main className="projects-wrapper">
      <header className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Latest Projects</h1>
        <p>What I'm working on in my free time:</p>
      </header>

      <div className="project-list">
        {myProjects.map((project, index) => (
          <a key={index} href={project.link} className="minimal-card" target="_blank" rel="noreferrer">
            <div className="card-header">
              <h3>{project.title}</h3>
              <span className="arrow">↗</span>
            </div>
            <p>{project.description}</p>
            <ul className="minimal-tags">
              {project.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </main>
  );
}
