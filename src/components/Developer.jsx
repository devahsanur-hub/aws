import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCode, FaHeadset, FaRocket } from "react-icons/fa";
import developerOriginal from "../assets/developer-original.png";

const points = [
  { icon: <FaCode />, text: "React, WordPress, PHP and UI/UX focused development." },
  { icon: <FaRocket />, text: "Business-ready websites with pricing, projects and lead flow." },
  { icon: <FaHeadset />, text: "Clear communication, launch support and future updates." },
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
          <h2 className="section-title">Built by a focused web developer.</h2>
          <p className="section-lead">
            Ahsanur Web Solution creates clean, fast and premium business
            websites with modern UI, responsive layout and launch support.
          </p>
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
        </motion.div>

        <motion.div
          className="developer-photo-card crystal-photo-card"
          initial={{ opacity: 0, x: -30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img src={developerOriginal} alt="Ahsanur Web Solution developer" />
        </motion.div>
      </div>
    </section>
  );
};

export default Developer;
