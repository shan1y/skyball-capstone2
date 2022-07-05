import React from "react";
import "./FooterComponent.scss";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function FooterComponent() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <h1 className="footer__title">SkyBall Clinics & Meetups</h1>
        <ul className="options__list">
          <li className="options__list-item">About Us</li>
          <li className="options__list-item">Email</li>
          <li className="options__list-item">Phone</li>

          <li className="options__list-item"></li>
          <li className="options__list-item"></li>
          <li className="options__list-item"></li>
          <li className="options__list-item"></li>
        </ul>
        <hr className="border"></hr>
        <ul className="about__list">
          <li className="about__list-item">Privacy</li>
          <li className="about__list-item">Legal</li>
          <li className="about__list-item"></li>
        </ul>
        <hr className="border"></hr>
        <ul className="footer__icons">
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <FaGithub />
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </IconContext.Provider>
        </ul>
      </div>
    </section>
  );
}

export default FooterComponent;
