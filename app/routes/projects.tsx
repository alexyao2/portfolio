//import type { Route } from "./+types/projects";
import "./projects.css";
import { Link } from "react-router";

export default function Projects() {
  const myProjects = [
    {
      title: "NBA Ref Analytics",
      description: "A full-stack analytics dashboard for exploring NBA referee trends, foul differential, home-bias indicators, consistency, and statistical outliers across seasons.",
      tags: ["React", "FastAPI", "Python", "Docker", "Nginx"],
      link: "https://github.com/alexyao2/nba-ref-analytics",
    },
    {
      title: "Cross-Platform Video Tracker",
      description: "A data engineering pipeline that ingests, normalizes, and compares creator engagement metrics across YouTube and TikTok with a unified SQLite schema.",
      tags: ["Python", "SQLite", "APIs", "Playwright", "CLI"],
      link: "https://github.com/alexyao2/videotracker",
    },
    {
      title: "Personal Website",
      description: "My personal website built with modern web technologies to showcase my portfolio and blog posts.",
      tags: ["React Router", "TypeScript", "CSS", "GitHub Pages"],
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
