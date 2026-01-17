//import type { Route } from "./+types/projects";
import "./projects.css";
import { Link } from "react-router";

export default function Projects() {
  const myProjects = [
    {
      title: "Multi-platform Video tracker",
      description: "A video tracking application that analyzes video performance for creators across Tiktok and YouTube, developed using Python and OpenCV.",
      tags: ["Python", "OpenCV", "SQL", "APIs", "Pandas"],
      link: "https://github.com/alexyao2/cross-platform-video-tracker",
    },
    {
      title: "Personal Website",
      description: "My personal website built with modern web technologies to showcase my portfolio and blog posts.",
      tags: ["React", "CSS", "HTML"],
      link: "https://github.com/alexyao2/portfolio",
    },
    {
      title: "Racket Compiler",
      description: "A simple compiler for a subset of the Racket programming language, built using Racket and Assembly code.",
      tags: ["Racket", "x86 Assembly"],
      link: "https://github.com/alexyao2/compilerwip",
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
          <a key={index} href={project.link} className="minimal-card">
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