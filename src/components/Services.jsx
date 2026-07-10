import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import uiuxImg from '../assets/uiux.png';
import seoImg from '../assets/seo.png';
import webdevImg from '../assets/webdev.png';
import softwareImg from '../assets/Software Industry.jpg';
import logoImg from '../assets/Dreamsdesign-Best-logo-design-company-1024x655.jpg';
import graphicImg from '../assets/6718fbb85d1152665bfafec4_Untitled design (14).jpg';
import wordpressImg from '../assets/wordpress.jpg';


const servicesData = [
  {
    title: "UI/UX Design",
    details:
      "I create modern, clean, and intuitive user interfaces with Figma and other design tools, ensuring smooth user experiences and visually appealing layouts.",
    direction: "left",
    image: uiuxImg,
  },
  {
    title: "SEO Optimization",
    details:
      "I help websites rank higher on Google by applying proven SEO techniques, keyword research, on-page/off-page optimization, and content strategies.",
    direction: "top",
    image: seoImg,
  },
  {
    title: "Web Development",
    details:
      "I build fast, responsive, and dynamic websites using React, Node.js, and MongoDB. My websites are optimized for performance and scalability.",
    direction: "right",
    image: webdevImg,
  },
  {
    title: "Software Development",
    details:
      "I develop custom software solutions tailored to business needs, using modern programming languages and frameworks for desktop, web, and mobile platforms.",
    direction: "right",
    image: softwareImg,
  },
  {
    title: "Logo Design",
    details:
      "I design professional and creative logos that represent your brand identity, ensuring uniqueness and long-lasting impression for your business.",
    direction: "right",
    image: logoImg,
  },
  {
    title: "Graphic Design",
    details:
      "I create eye-catching graphics, posters, social media designs, and marketing materials that enhance brand visibility and attract more customers.",
    direction: "right",
    image: graphicImg,
  },
  {
    title: "WordPress Development",
    details:
      "I develop professional and fully functional WordPress websites, including custom themes, plugins, and WooCommerce integration for e-commerce businesses.",
    direction: "right",
    image: wordpressImg,
  },
];


const getInitialAnimation = (direction) => {
  if (direction === "left") return { x: -100, opacity: 0 };
  if (direction === "right") return { x: 100, opacity: 0 };
  if (direction === "top") return { y: -100, opacity: 0 };
  return { opacity: 0 };
};

const getWhileInViewAnimation = (direction) => {
  if (direction === "left" || direction === "right") return { x: 0, opacity: 1 };
  if (direction === "top") return { y: 0, opacity: 1 };
  return { opacity: 1 };
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      style={{
        padding: "2rem",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        color: "#fff",
        minHeight: "70vh",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "3rem" }}
      >
        💼 My Services
      </motion.h2>

      <AnimatePresence mode="wait">
        {expandedIndex === null ? (
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={getInitialAnimation(service.direction)}
                whileInView={getWhileInViewAnimation(service.direction)}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "2rem",
                  borderRadius: "15px",
                  width: "300px",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
                  {service.title}
                </h3>
                <button
                  onClick={() => toggleDetails(index)}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "none",
                    background: "#ffffff22",
                    color: "#fff",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Details
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1",
                color: "#ddd",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {servicesData[expandedIndex].title}
              </h3>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                {servicesData[expandedIndex].details}
              </p>

              <button
                style={{
                  padding: "0.75rem 1.25rem",
                  background: "#6c63ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  width: "fit-content",
                }}
                onClick={() => alert("Contact us at ahsanurr292@gmail.com")}
              >
                Contact Us
              </button>

              <button
                style={{
                  padding: "0.5rem 1rem",
                  background: "#ffffff33",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "fit-content",
                }}
                onClick={() => setExpandedIndex(null)}
              >
                Back
              </button>
            </div>

            <motion.div
              style={{ flex: "1" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={servicesData[expandedIndex].image}
                alt={servicesData[expandedIndex].title}
                style={{
                  width: "100%",
                  maxHeight: "350px",
                  borderRadius: "15px",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
