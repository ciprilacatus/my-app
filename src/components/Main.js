import React from "react";

export default function Main() {
  return (
    <div className="main">
      <h1>Lacatus Ciprian</h1>
      <h4>Frontend Developer</h4>
      <h5>lacatusciprian.website</h5>

      <button className="main--button">
        <i class="fa-solid fa-envelope"></i>
        <p>Email</p>
      </button>
      <div className="main--description">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
