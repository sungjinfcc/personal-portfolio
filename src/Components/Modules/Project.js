import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
          LIVE PREVIEW <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <a href={github} target="blank">
          VIEW CODE <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
}

export default Project;
