import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCode, FaHeadset, FaMapMarkerAlt, FaRocket, FaSearchLocation } from "react-icons/fa";
import developerOriginal from "../assets/developer-original.png";

const points = [
  { icon: <FaCode />, text: "React, WordPress, PHP and modern UI/UX website development." },
  { icon: <FaSearchLocation />, text: "Local SEO focused websites for Beldanga, Murshidabad and West Bengal businesses." },
  { icon: <FaRocket />, text: "Business-ready websites with pricing, project showcase, WhatsApp leads and fast launch support." },
  { icon: <FaHeadset />, text: "Clear communication, mobile responsive design, SEO setup and future updates." },
];

const profileFacts = [
  { label: "Name", value: "Ahsanur Rahaman" },
  { label: "Location", value: "Beldanga, Murshidabad" },
  { label: "Work", value: "Website Design, React, WordPress, SEO" },
  { label: "Brand", value: "Ahsanur Web Solution" },
];

const Developer = () => {
  return (
    <section id="developer" className="section developer-section crystal-band">
      <div className="section-inner developer-grid">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">About Developer</p>
          <h2 className="section-title">Ahsanur Rahaman, web developer from Beldanga.</h2>
          <p className="section-lead">
            I am Ahsanur Rahaman, founder of Ahsanur Web Solution in Beldanga,
            Murshidabad. I create modern dark-theme websites, React portfolios,
            WordPress business sites, landing pages and local SEO ready websites
            for businesses that want more calls, WhatsApp enquiries and trust online.
          </p>

          <div className="profile-facts" aria-label="Ahsanur Rahaman profile information">
            {profileFacts.map((fact) => (
              <div className="profile-fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>

          <div className="developer-points">
            {points.map((point) => (
              <div className="developer-point glass-card" key={point.text}>
                <span>{point.icon}</span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
          <div className="developer-badge">
            <FaCheckCircle /> Ahsanur Web Solution
          </div>
          <div className="developer-location">
            <FaMapMarkerAlt /> Beldanga, Murshidabad, West Bengal, India
          </div>
        </motion.div>

        <motion.div
          className="developer-photo-card crystal-photo-card"
          initial={{ opacity: 0, x: -30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img src={developerOriginal} alt="Ahsanur Rahaman, web developer in Beldanga Murshidabad" />
        </motion.div>
      </div>
    </section>
  );
};

export default Developer;
