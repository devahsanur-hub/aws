import React from "react";
import { motion } from "framer-motion";
import dashboardImg from "../assets/skills-dashboard-generated.png";

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 86 },
  { name: "HTML/CSS", level: 94 },
  { name: "PHP & CodeIgniter", level: 78 },
  { name: "WordPress", level: 88 },
  { name: "SEO Optimization", level: 84 },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-inner skills-layout">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Clean code with sharp visual taste.</h2>
          <p className="section-lead">
            I combine frontend development, WordPress, SEO and UI thinking to
            create websites that feel professional and work smoothly.
          </p>

          <div className="grid feature-grid">
            {["Fast loading", "Responsive UI", "Conversion CTA"].map((item) => (
              <div className="feature-card glass-card" key={item}>
                <h3 className="card-title">{item}</h3>
                <p className="card-text">Built for real users on mobile and desktop.</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="glass-card feature-card"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={dashboardImg}
            alt="Generated web developer skills dashboard for React, WordPress, SEO and UI/UX"
            className="skills-dashboard-image"
            loading="lazy"
          />
          {skills.map((skill, index) => (
            <div className="skill-row" key={skill.name}>
              <div className="skill-meta">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-track">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
