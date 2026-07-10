import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaSearch, FaShoppingCart, FaWordpress, FaLayerGroup } from "react-icons/fa";
import webdevImg from "../assets/webdev.png";
import uiuxImg from "../assets/uiux.png";
import seoImg from "../assets/seo.png";
import wordpressImg from "../assets/wordpress.jpg";
import softwareImg from "../assets/Software Industry.jpg";
import graphicImg from "../assets/6718fbb85d1152665bfafec4_Untitled design (14).jpg";

const services = [
  {
    title: "React Website",
    text: "Portfolio, business website, landing page, admin dashboard and custom frontend with smooth animation.",
    image: webdevImg,
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    text: "Modern layout, clean spacing, mobile-first sections, CTA flow and professional brand presentation.",
    image: uiuxImg,
    icon: <FaPaintBrush />,
  },
  {
    title: "SEO Setup",
    text: "Meta content, page structure, performance cleanup, Google-friendly content blocks and technical basics.",
    image: seoImg,
    icon: <FaSearch />,
  },
  {
    title: "WordPress Site",
    text: "Business, blog, service and WooCommerce websites with responsive pages and easy content updates.",
    image: wordpressImg,
    icon: <FaWordpress />,
  },
  {
    title: "Business System",
    text: "Booking, lead forms, dashboards, custom panels and workflow tools for small businesses.",
    image: softwareImg,
    icon: <FaLayerGroup />,
  },
  {
    title: "Brand Graphics",
    text: "Logo, banner, social media creative and launch visuals for a stronger online identity.",
    image: graphicImg,
    icon: <FaShoppingCart />,
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">Websites, design and digital growth.</h2>
        <p className="section-lead">
          Everything needed to launch a professional online presence: design,
          development, performance, SEO basics, and support.
        </p>

        <div className="grid services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card glass-card"
              key={service.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -8 }}
            >
              <img src={service.image} alt={service.title} />
              <div className="icon-box">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-text">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
