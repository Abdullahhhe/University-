import "./Info.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export default function Info() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const sty = {
    fontSize: "50px",
    color: "darkblue",
    marginTop: "120px",
    marginLeft: "12px",
  };
  return (
    <div className="Info">
      <div className="One" data-aos="fade-down">
        <h2>Security & Brand</h2>
        <p>Report Copyright Infringement</p>
        <p>Report Security Issue</p>
        <p>Trademark Notice</p>
        <div className="pr">
          <p>Copyright © 2025 The President and Fellows of Harvard College</p>
        </div>
      </div>
      <div className="Tow" data-aos="fade-down">
        <h2>Website</h2>
        <p>Accessibility</p>
        <p>Digital Accessibility</p>
        <p>Privacy statement</p>
        <div className="im">
          <img src="./images/photo_2025-03-21_03-21-38.jpg" alt="sorry" />
          <p>جامعة الرشيد</p>
        </div>
      </div>
      <div className="Three" data-aos="fade-down">
        <h2>Get In Touch</h2>
        <p>Contact Harvard</p>
        <p>Maps & Directions</p>
        <p>Jobs</p>
        <div className="Icon">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={sty} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={sty} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={sty} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube style={sty} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter style={sty} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok style={sty} />
          </a>
        </div>
      </div>
    </div>
  );
}
