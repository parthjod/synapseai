import React from "react";

function WorkshopCard({ date, topic, speaker, title, aboutSpeaker, venue, image, time }) {
  return (
    <div className="workshop-card">
      <span className="workshop-date">{date}</span>
      <img src={image} alt={topic} className="workshop-image" />
      <h3 style={{ fontFamily: "'Roboto Mono', monospace", textAlign: "center", marginTop: "10px" }}>{topic}</h3>
      <p>
        <strong style={{ fontFamily: "Rajdhani", fontSize: "20px" }}>Speaker :</strong> {speaker}
      </p>
      <p>
        <strong style={{ fontFamily: "Rajdhani", fontSize: "20px" }}>Venue :</strong> {venue}
      </p>
      <p>
        <strong style={{ fontFamily: "Rajdhani", fontSize: "20px" }}>Time :</strong> {time}
      </p>
      <details className="about-speaker">
        <summary>About Speaker :</summary>
        <div className="speaker-info">
          <span>{title}</span>
        </div>
        <p>{aboutSpeaker}</p>
      </details>
    </div>
  );
}

export default WorkshopCard;
