import React from "react";
import { motion } from "framer-motion";

const items = [
  { year: "Education", title: "Bachelor of Computer Application", text: "Strong base in programming, web systems and software concepts." },
  { year: "Focus", title: "Frontend and WordPress", text: "React, responsive UI, animation, WordPress and business websites." },
  { year: "Delivery", title: "Design to Launch", text: "Planning, development, SEO starter setup, testing and client handover." },
];

const Qualification = () => {
  return (
    <section id="qualification" className="section">
      <div className="section-inner">
        <p className="section-kicker">Profile</p>
        <h2 className="section-title">A practical developer for real business needs.</h2>
        <div className="grid timeline-grid">
          {items.map((item, index) => (
            <motion.article
              className="timeline-item glass-card"
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <strong>{item.year}</strong>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
