import React, { useState, useEffect } from 'react';

interface VideoModalProps {
  videoId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ 
  videoId = 'oxEya9SYYpQ', 
  isOpen, 
  onClose 
}: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal" onClick={handleBackdropClick}>
      <div className="video-modal-content">
        <div className="corner-effect top-left"></div>
        <div className="corner-effect top-right"></div>
        <div className="corner-effect bottom-left"></div>
        <div className="corner-effect bottom-right"></div>

        <button
          className="video-modal-close"
          onClick={onClose}
          type="button"
          aria-label="Fermer la vidéo"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="video-wrapper">
          {isLoading && (
            <div className="video-placeholder">
              <img
                src="/images/portfolio/miniature.jpg"
                alt="Prévisualisation vidéo"
                className="placeholder-image"
              />
              <div className="video-loading">
                <div className="loader"></div>
                <span>Chargement...</span>
              </div>
            </div>
          )}

          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Vidéo de présentation de Christophe Mostefaoui"
            onLoad={handleIframeLoad}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.5s ease'
            }}
          />
        </div>
      </div>
    </div>
  );
}