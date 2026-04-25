import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "./projectsData";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find((p) => p.id === parseInt(id, 10));

  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);

  const goToProjects = () => {
    sessionStorage.setItem("scrollToProjects", "true");
    navigate("/");
  };

  if (!project) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <h2>Project not found</h2>
          <button onClick={goToProjects} className="back-link" type="button">
            <span className="back-arrow">←</span>
            <span>Back to Projects</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button onClick={goToProjects} className="back-link" type="button">
          <span className="back-arrow">←</span>
          <span>Back to Projects</span>
        </button>

        <div className="detail-hero">
          <div className="detail-text">
            <p className="detail-tag">PROJECT DETAILS</p>
            <h1>{project.title}</h1>
            <p className="detail-description">{project.fullDescription}</p>

            <div className="detail-meta">
              <div className="meta-box">
                <h4>Exhibition / Achievement</h4>
                <p>{project.exhibition}</p>
              </div>
            </div>
          </div>

          <div className="detail-cover-wrap">
            <img
              src={project.cover}
              alt={project.title}
              className="detail-cover"
            />
          </div>
        </div>

        {project.isCollaborative && (
          <div className="detail-section">
            <h2>Team Members</h2>
            <ul className="team-list">
              {project.team.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-section">
          <h2>Technologies / Key Areas</h2>
          <div className="tech-grid">
            {project.tech.map((item, index) => (
              <div className="tech-pill" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2>Photo Gallery</h2>
          <div className="detail-gallery">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="gallery-image"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {project.video && (
          <div className="detail-section">
            <h2>Project Video</h2>
            <video controls className="detail-video">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Selected"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="close-modal"
            onClick={() => setSelectedImage(null)}
            type="button"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;