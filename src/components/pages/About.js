import React from "react";
import profilePic from "../../assets/images/profile.png";
import Contact from "../Contact";

function About() {
  return (
    <>
      <div className="container" id="about">
        <div className="media w3-black">
          <img src={profilePic} className="img" alt="Profile" />
          <div className="media-body">
            <p id="aboutme">
              {" "}
              Brazilian full Stack Web Developer with a background in sales,
              fashion and customer service providing strong problem-solving
              skills with a keen eye for aesthetics and presentation. An
              excellent communicator and collaborator who works well in
              team-based projects and independently with very strong
              interpersonal skills. Effectively leverage interest in solving
              complex problems by contributing as a part of a fast paced,
              quality-driven team.
            </p>
            <p className="iconabt">
              <i className="fab fa-js-square fa-2x"></i>{" "}
              <i className="fab fa-react fa-2x"></i>{" "}
              <i className="fab fa-html5 fa-2x"></i>{" "}
              <i className="fab fa-css3-alt fa-2x"></i>{" "}
              <i className="fab fa-bootstrap fa-2x"></i>{" "}
              <i className="fab fa-npm fa-2x"></i>{" "}
              <i className="fab fa-node fa-2x"></i>{" "}
              <i className="fab fa-git fa-2x"></i>
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default About;
