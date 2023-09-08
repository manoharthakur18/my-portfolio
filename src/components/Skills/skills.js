import React from "react";
import "./skills.css";
import JavaDesign from "../../assets/java-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer, app developer and Java
        developer with experience in creating visually and appealing and user
        friendly applications and websites. I have a strong understanding of
        design and development. I'm proficient in HTML, CSS, JavaScript, React
        Js, React Native, Java and Spring-Boot.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={JavaDesign} alt="Java Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Java Backend Developer</h2>
            <p>This is a demo text, here I'll add content later</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>This is a demo text, here I'll add content later</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mobile App Developer</h2>
            <p>This is a demo text, here I'll add content later</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
