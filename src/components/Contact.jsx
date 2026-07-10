import React, { useState, useRef } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.current.reset();
    setShowForm(false);
  };

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  const infoStyle = {
    marginBottom: "1rem",
    fontSize: "1.1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Me</h2>

      <div style={{ position: "relative", width: "100%", maxWidth: "600px" }}>
        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="info"
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "15px",
                textAlign: "left",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <p style={infoStyle}>
                <FaEnvelope />
                <a href="mailto:ahsanurr292@gmail.com" style={linkStyle}>
                  ahsanurr292@gmail.com
                </a>
              </p>

              <p style={infoStyle}>
                <FaPhoneAlt />
                <a href="tel:+917866030833" style={linkStyle}>
                  +91 7866030833
                </a>
              </p>

              <p style={infoStyle}>
                <FaMapMarkerAlt />
                <a
                  href="https://www.google.com/maps/place/Beldanga,+West+Bengal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Beldanga, West Bengal, India
                </a>
              </p>

              {/* 🔥 Glowing Big Social Icons */}
            <div
  style={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1.5rem",
    margin: "2rem 0",
  }}
>
  <SocialIcon
    href="https://www.facebook.com/share/1AYxZkYnBi/"
    color="#1877F2"
    icon={<FaFacebookF size={40} />}
  />
  <SocialIcon
    href="https://linkedin.com"
    color="#0077b5"
    icon={<FaLinkedinIn size={40} />}
  />
  <SocialIcon
    href="https://github.com/ahsanurrahaman"
    color="#6e5494"
    icon={<FaGithub size={40} />}
  />
  <SocialIcon
    href="https://www.instagram.com/_.ashhh_05?utm_source=qr&igsh=MWhsNGR4NHhhY3c4Zg=="
    color="#E4405F"
    icon={<FaInstagram size={40} />}
  />
  <SocialIcon
    href="https://wa.me/917866030833"
    color="#25D366"
    icon={<FaWhatsapp size={40} />}
  />
</div>


              <button
                onClick={handleToggle}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "#6c63ff",
                  border: "none",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "block",
                  margin: "0 auto",
                  transition: "background 0.3s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#5a52e8";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#6c63ff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Contact Us Directly
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "15px",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <style>{`
                input::placeholder,
                textarea::placeholder {
                  color: rgb(192, 188, 188);
                  opacity: 1;
                }
              `}</style>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                style={inputStyle}
              ></textarea>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button
                  type="submit"
                  style={{
                    padding: "0.6rem 1.2rem",
                    background: "#6c63ff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={handleToggle}
                  style={{
                    padding: "0.6rem 1.2rem",
                    background: "#ffffff33",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// 🌟 Input Style
const inputStyle = {
  padding: "0.8rem 1rem",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
  background: "#ffffff22",
  color: "#fff",
};

// 🌟 Reusable Social Icon Component
const SocialIcon = ({ href, icon, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#ffffff22",
      transition: "0.3s ease",
    }}
    whileHover={{
      scale: 1.2,
      boxShadow: `0 0 20px ${color}`,
      backgroundColor: color,
    }}
  >
    {icon}
  </motion.a>
);

export default Contact;
