import "./interests.css";
import { Link } from "react-router";
import YouTubeEmbed from "~/components/YouTubeEmbed";

export default function Interests() {
  const videoEdits = [
    { id: 1, title: "Summer Vlog 2025", tags: ["Premiere Pro", "Lut Design"], src: "/videos/video1.mp4" },
    { id: 2, title: "TFT Set 13 Montage", tags: ["After Effects", "Motion Graphics"], src: "/videos/video2.mp4" },
    { id: 3, title: "DC Street Photography", tags: ["Color Grading", "Shorts"], src: "/videos/video3.mp4" },
  ];

  return (
    <div className="interests-wrapper">
      <h1 className="section-label">Video Edits</h1>
      
      <div className="video-grid">
        {/* Card 1 */}
        <div className="featured-project-card">
          <div className="card-titles">
            <h3>Summer 2025 Vlog</h3>
            <p>A cinematic look at my travels using Premiere Pro and After Effects.</p>
          </div>
          
          {/* Use the component here */}
          <YouTubeEmbed 
            videoId="dQw4w9WgXcQ" 
            title="Summer Vlog 2025" 
          />
          
          <ul className="tech-tags-minimal">
            <li>Premiere Pro</li>
            <li>Lumetri Color</li>
          </ul>
        </div>
      </div>
    </div>
  );
}