import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i90y6n5",
        "template_dhjsprc",
        form.current,
        "8w-TWEN3WNPI6DiGc"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client Image" className="clientImg" />
          <img src={Adobe} alt="Client Image" className="clientImg" />
          <img src={Microsoft} alt="Client Image" className="clientImg" />
          <img src={Facebook} alt="Client Image" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppotunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input
            type="email"
            required
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea name="message" rows="5" className="msg"></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
