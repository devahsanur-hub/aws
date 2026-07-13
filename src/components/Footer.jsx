import React from "react";
import { FaArrowUp, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Ahsanur Web Solution</strong>
          <span>React websites, WordPress, SEO and business web solutions.</span>
        </div>

        <div className="footer-actions" aria-label="Footer links">
          <a href="mailto:ahsanurr292@gmail.com" aria-label="Email Ahsanur Web Solution">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/917866030833" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#home" aria-label="Back to top">
            <FaArrowUp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Ahsanur Web Solution. All rights reserved.</span>
        <span className="footer-links">
          <a href="/about">About</a>
          <a href="/ahsanur-rahaman">Ahsanur Rahaman</a>
          <a href="/website-development-beldanga">Website Development in Beldanga</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/refund-policy">Refund Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
