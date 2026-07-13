import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRocket,
  FaSearchLocation,
  FaWhatsapp,
} from "react-icons/fa";

const skills = ["React", "WordPress", "UI/UX", "Local SEO", "Business Website", "Landing Page"];

const stats = [
  { label: "Location", value: "Beldanga" },
  { label: "Focus", value: "Web + SEO" },
  { label: "Brand", value: "Ahsanur Web Solution" },
];

const points = [
  { icon: <FaCode />, text: "Modern website design with React, WordPress, PHP and clean UI/UX." },
  { icon: <FaSearchLocation />, text: "Local SEO focused pages for Beldanga, Murshidabad and West Bengal search." },
  { icon: <FaRocket />, text: "Portfolio, business website, landing page, lead flow and WhatsApp enquiry setup." },
];

const Developer = () => {
  return (
    <section id="developer" className="section developer-section crystal-band">
      <div className="section-inner developer-portfolio">
        <motion.div
          className="portfolio-profile-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portfolio-photo-wrap">
            <img
              src="/ahsanur-rahaman-web-developer-beldanga.png"
              alt="Ahsanur Rahaman, web developer and founder of Ahsanur Web Solution in Beldanga, Murshidabad"
              title="Ahsanur Rahaman - Web Developer in Beldanga"
            />
          </div>

          <div className="portfolio-card-body">
            <span className="portfolio-status">
              <FaCheckCircle /> Available for web projects
            </span>
            <h3>Ahsanur Rahaman</h3>
            <p>Founder, Ahsanur Web Solution</p>
            <div className="portfolio-location">
              <FaMapMarkerAlt /> Beldanga, Murshidabad, West Bengal
            </div>
          </div>
        </motion.div>

        <motion.div
          className="portfolio-content"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-kicker">Compact Portfolio</p>
          <h2 className="section-title">Web developer, UI/UX designer and local SEO specialist.</h2>
          <p className="section-lead">
            I build clean portfolio websites, business websites, WordPress sites
            and SEO-ready landing pages for Beldanga, Murshidabad and online
            businesses. My goal is simple: modern design, fast loading pages and
            more enquiry through WhatsApp, calls and search.
          </p>

          <div className="portfolio-stats">
            {stats.map((stat) => (
              <div className="portfolio-stat" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="portfolio-skill-cloud" aria-label="Ahsanur Rahaman skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="developer-points compact-points">
            {points.map((point) => (
              <div className="developer-point glass-card" key={point.text}>
                <span>{point.icon}</span>
                <p>{point.text}</p>
              </div>
            ))}
          </div>

          <div className="portfolio-actions">
            <a className="btn btn-primary" href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
              <FaWhatsapp /> Hire Me
            </a>
            <a className="btn btn-ghost" href="mailto:ahsanurr292@gmail.com">
              <FaEnvelope /> Email
            </a>
            <a className="btn btn-ghost" href="/ahsanur-rahaman">
              Meet Ahsanur Rahaman
            </a>
            <a className="portfolio-inline-link" href="#projects">
              View Work <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Developer;
