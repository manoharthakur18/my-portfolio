import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from '../../assets/hireme.png'
import { Link } from "react-scroll";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Manohar</span>
          <br /> App/Java Developer
        </span>
        <p className="introPara">
          I'm a skilled app and java developer with experience in creating<br/>
          visually applealing and user friendly applicaitons
        </p>
        <Link><button className="btn"><img src={btnImg} alt="" className="btnImg"/>Hire me</button></Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;
