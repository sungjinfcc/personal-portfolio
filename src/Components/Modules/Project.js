import React from "react";

function Project({ title, src, tech, date, preview, github }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={src} alt={title}></img>
      <h4>Project Highlights</h4>
      <p>{tech}</p>
      <h4>Date</h4>
      <p className="date">{date}</p>
      <div className="links">
        <a href={preview} target="blank">
          LIVE PREVIEW
        </a>
        <a href={github} target="blank">
          VIEW CODE
        </a>
      </div>
    </div>
  );
}

export default Project;
