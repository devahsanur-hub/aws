import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaExternalLinkAlt, FaGlobe, FaSearch, FaShoppingCart, FaTools } from "react-icons/fa";

const featuredProjects = [
  { domain: "silverfalcon.in", type: "Corporate Website", icon: <FaGlobe /> },
  { domain: "themosquitosolution.com", type: "Service Website", icon: <FaTools /> },
  { domain: "solaimanhumamhair.com", type: "Product Website", icon: <FaShoppingCart /> },
  { domain: "feesbook.co.in", type: "Business Platform", icon: <FaTools /> },
];

const moreProjects = [
  { domain: "beldangasamachar.com", type: "News Website", icon: <FaGlobe /> },
  { domain: "dgps.co.in", type: "School Website", icon: <FaGlobe /> },
  { domain: "docfiling.in", type: "Service Website", icon: <FaTools /> },
  { domain: "goumatatazf.com", type: "Business Website", icon: <FaGlobe /> },
  { domain: "mdrajabiri.com", type: "Portfolio Website", icon: <FaGlobe /> },
  { domain: "novaplastpipe.com", type: "Manufacturing Website", icon: <FaTools /> },
  { domain: "raingo.in", type: "Brand Website", icon: <FaGlobe /> },
  { domain: "righten.in", type: "Company Website", icon: <FaSearch /> },
  { domain: "tsfabricationandengineer.com", type: "Engineering Website", icon: <FaTools /> },
];

const ProjectCard = ({ project, index }) => (
  <motion.a
    className="project-card domain-card glass-card"
    href={`https://${project.domain}`}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.42, delay: index * 0.035 }}
    whileHover={{ y: -7, scale: 1.01 }}
  >
    <div className="domain-icon">{project.icon}</div>
    <span className="project-type">{project.type}</span>
    <h3 className="card-title">{project.domain}</h3>
    <p className="card-text">Responsive website, professional layout, launch-ready online presence.</p>
    <span className="visit-link">
      Visit Website <FaExternalLinkAlt />
    </span>
  </motion.a>
);

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <p className="section-kicker">Live Projects</p>
        <h2 className="section-title">Websites I have worked on.</h2>
        <p className="section-lead">
          Featured client websites first. Click Show More to open the full
          portfolio list.
        </p>

        <div className="grid project-grid live-project-grid featured-project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.domain} />
          ))}
        </div>

        <div className="show-more-row">
          <button className="btn btn-ghost show-more-btn" type="button" onClick={() => setShowMore((value) => !value)}>
            {showMore ? "Show Less" : "Show More"} <FaChevronDown className={showMore ? "rotated" : ""} />
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              className="grid project-grid live-project-grid more-project-grid"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
            >
              {moreProjects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.domain} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
