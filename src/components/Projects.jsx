import React from "react";
import { motion } from "framer-motion";


const projectList = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React, showcasing skills, services, and contact info.",
    image: require("../assets/seo.png"), 
    link: "https://ahsanur.netlify.app/",
  },
  {
    title: "Blog App",
    description: "A full-stack blog platform with React, Node.js, and MongoDB, including categories and likes.",
    image: require("../assets/blog.jpg"),
    link: "https://www.wix.com/app-market/web-solution/blog",
  },
  {
    title: "E-commerce Site",
    description: "A modern e-commerce website with product listing, cart, and payment gateway integration.",
    image: require("../assets/servis.avif"),
    link: "https://zapier.com/blog/best-ecommerce-shopping-cart-software/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "3rem 2rem",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2.5rem" }}
      >
        🚀 My Projects
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "15px",
              padding: "1.5rem",
              maxWidth: "320px",
              width: "100%",
              color: "#fff",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "1rem",
              }}
            />

            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{project.title}</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.6rem 1rem",
                background: "#6c63ff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
