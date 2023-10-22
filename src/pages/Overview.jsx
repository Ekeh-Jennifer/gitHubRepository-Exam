import React from "react";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Face from "../assets/face-smile-regular.svg";

function Overview() {
  return (
    <>
      {" "}
      <div className="container__intro">
        <p>Ekeh-Jennifer / README.md </p>
      </div>
      <div className="container__body">
        <p>Hello there, welcome! </p>
      </div>
      <div className="container__conclusion">
        <div className="container__conclusionP">
          <p>About Me</p>
        </div>

        <p>
          I have always been fascinated about the world of technology and my
          journey into web development began by picking up tutorials on YouTube.
          Now I am a student of ALT school africa and my journey so far has been
          very knowledgeable. Thanks to ALT School i am proficient in
          programming languages like, Html, Css, javascript, and react. I am
          still in the process of learning and gathering more experiences. I am
          open to internship offers, and entry-level oportunities{" "}
        </p>
        <div>
          <p>
            Quick Summary:
            <ul>
              <li>
                💼 Job interests: Software Engineer, FrontEnd Engineer, or UI
                Engineer (Intern or Junior level).{" "}
              </li>

              <li>
                📫 You can view my resume and contact me via my email:
                valerieekeh@gmail.com.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="container__social">
        <img src={Twitter} alt="" /> <p>@quinypher</p>
      </div>
    </>
  );
}

export default Overview;
