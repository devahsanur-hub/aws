import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  { href: "https://www.facebook.com/share/1AYxZkYnBi/", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://github.com/ahsanurrahaman", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.instagram.com/_.ashhh_05?utm_source=qr&igsh=MWhsNGR4NHhhY3c4Zg==", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://wa.me/917866030833", icon: <FaWhatsapp />, label: "WhatsApp" },
];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thanks! Please send the details on WhatsApp for fastest reply.");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Tell me what website you need.</h2>
        <p className="section-lead">
          Contact Ahsanur Rahaman for website design, WordPress, React
          development and SEO services in Beldanga, Murshidabad and nearby areas.
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-panel glass-card"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-line"><FaEnvelope /> <a href="mailto:ahsanurr292@gmail.com">ahsanurr292@gmail.com</a></p>
            <p className="contact-line"><FaPhoneAlt /> <a href="tel:+917866030833">+91 7866030833</a></p>
            <p className="contact-line"><FaMapMarkerAlt /> Beldanga, Murshidabad, West Bengal, India</p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
              <a className="btn btn-ghost" href="mailto:ahsanurr292@gmail.com">
                Email Me
              </a>
            </div>
            <div className="socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card contact-panel"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <input type="text" name="budget" placeholder="Budget or package name" />
            <textarea name="message" placeholder="Website details" required />
            <button className="btn btn-primary" type="submit">
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
