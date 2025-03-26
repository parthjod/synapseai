import React from "react";
import WorkshopCard from "../components/WorkshopCard";

function Home() {
  const workshops = [
    {
      date: "5th April",
      topic: "AI and Data Science",
      speaker: "Sir Rajesh Shrivastava",
      title: "Lead Data Scientist @ Oracle",
      aboutSpeaker: "Expert in Generative AI and Data Science",
      venue: "Torna Hall",
      time: "16:00 to 18:00",
      image: "/rajesh.png",
    },
    {
      date: "8th April",
      topic: "Machine Learning",
      speaker: "Dr. Pankaj Singh",
      title: "Assistant Professor @ SIT",
      aboutSpeaker: "Specialization in Machine Learning",
      venue: "Torna Hall",
      time: "16:00 to 18:00",
      image: "/pankajsingh.png",
    },
    {
      date: "11th April",
      topic: "Computer Vision",
      speaker: "Sir Vimal Tomar",
      title: "Computer Vision Research Engineer @ Thelios Ai",
      aboutSpeaker: "Expert in Computer Vision.",
      venue: "Torna Hall",
      time: "16:00 to 18:00",
      image: "/vimaltomar.png",
    },
  ];

  return (
    <div className="home-container">
      <div className="page3">
        <h2>Welcome to Synapse AI Club</h2>
        <p>Join us in exploring the latest AI innovations.</p>
      </div>
      <div className="image-container">
        <img src="/Robot-Brain1.png" alt="AI Robot Brain" />
      </div>

      <div className="workshop-section">
        <h2>Upcoming Workshops</h2>
        <div className="workshop-container">
          {workshops.map((ws, index) => (
            <WorkshopCard key={index} {...ws} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
