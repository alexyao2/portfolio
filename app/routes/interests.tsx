import "./interests.css";
import { Link } from "react-router";
import YouTubeEmbed from "~/components/YouTubeEmbed";

export default function Interests() {
  const videoEdits = [
    { 
      id: 1, 
      title: "UMCPTASA Board Intro Video", 
      videoId: "d-VbD_ADaEs", 
      description: "Executive Board '24-'25 Video!",
      tags: ["After Effects", "Premiere Pro"] 
    },
    { 
      id: 2, 
      title: "UMCPTASA Junior Officer Intro", 
      videoId: "h5Kt-jZ2Yfg", 
      description: "Junior Officers '24-'25 Reveal Video.",
      tags: ["Color Grading", "Premiere Pro"] 
    },
    { 
      id: 3, 
      title: "Wiffleball Trip Vlog 2025", 
      videoId: "hWi6ii4Ui4M",
      description: "Lake Anna Retreat Vlog 2025",
      tags: ["Color Grading", "Premier Pro"] 
    },
  ];

  const galleryImages = [
    { id: 1, src: "photo1.jpg", alt: "Description of photo", size: "tall" },
    { id: 2, src: "photo2.jpg", alt: "Description of photo", size: "wide" },
    { id: 3, src: "photo3.jpg", alt: "Description of photo", size: "small" },
    { id: 4, src: "photo4.jpg", alt: "Description of photo", size: "tall" },
    { id: 5, src: "photo5.jpg", alt: "Description of photo", size: "tall" },
    { id: 6, src: "photo6.jpg", alt: "Description of photo", size: "tall" },
    { id: 7, src: "photo7.jpg", alt: "Description of photo", size: "small" }
  ];

  return (
    <main className="interests-wrapper">
      <Link to="/" className="back-link">← Back to Home</Link>
      
      <section className="interests-section">
        <h1 className="section-label">Videos</h1>
        <div className="video-gallery-grid">
          {videoEdits.map((video) => (
            <div key={video.id} className="featured-project-card video-card"> 
              <div className="card-titles">
                <h3>{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
              
              <YouTubeEmbed videoId={video.videoId} title={video.title} />
              
              <ul className="tech-tags-minimal">
                {video.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="interests-section">
        <h1 className="section-label">Photos</h1>
        <div className="photo-masonry-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className={`photo-item ${image.size}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}