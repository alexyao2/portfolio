import "./interests.css";
import { Link } from "react-router";

export default function Interests() {
  const videoEdits = [
    { id: 1, title: "Summer Vlog 2025", tags: ["Premiere Pro", "Lut Design"], src: "/videos/video1.mp4" },
    { id: 2, title: "TFT Set 13 Montage", tags: ["After Effects", "Motion Graphics"], src: "/videos/video2.mp4" },
    { id: 3, title: "DC Street Photography", tags: ["Color Grading", "Shorts"], src: "/videos/video3.mp4" },
  ];

  return (
    <main className="interests-wrapper">
      <header className="interests-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="interests-title">Interests & Edits</h1>
        <p className="interests-subtitle">A collection of my video editing work and creative hobbies.</p>
      </header>

      <section className="video-grid">
        {videoEdits.map((video) => (
          <div key={video.id} className="featured-project-card video-card">
            <div className="video-wrapper">
              <video controls preload="metadata" className="portfolio-video">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-titles">
              <h3>{video.title}</h3>
            </div>
            <div className="card-footer">
              <ul className="tech-tags-minimal">
                {video.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}