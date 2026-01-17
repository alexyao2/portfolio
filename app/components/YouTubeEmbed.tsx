import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="video-container" style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
      {isLoading && (
        <div className="video-loader">
          <div className="spinner"></div>
          <p>Loading Video...</p>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "8px",
          display: isLoading ? "none" : "block"
        }}
      />
    </div>
  );
}