import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaSearch, FaShoppingCart, FaWordpress, FaLayerGroup } from "react-icons/fa";
import webdevImg from "../assets/service-react-generated.png";
import uiuxImg from "../assets/service-uiux-generated.png";
import seoImg from "../assets/service-seo-generated.png";
import wordpressImg from "../assets/service-wordpress-generated.png";
import softwareImg from "../assets/service-business-generated.png";
import graphicImg from "../assets/service-brand-generated.png";

const services = [
  {
    title: "React Website Design",
    text: "Portfolio, business website, landing page and custom frontend for Beldanga and Murshidabad businesses.",
    image: webdevImg,
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    text: "Modern dark-theme layout, clean spacing, mobile-first sections, CTA flow and professional brand presentation.",
    image: uiuxImg,
    icon: <FaPaintBrush />,
  },
  {
    title: "Local SEO Setup",
    text: "Meta content, page structure, Google-friendly content and local SEO basics for Beldanga and Murshidabad search.",
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
          Website design, React development, WordPress and local SEO services
          for Beldanga, Murshidabad and West Bengal businesses.
        </p>

        <div className="grid services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card glass-card"
              key={service.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
            >
              <img src={service.image} alt={`${service.title} by Ahsanur Rahaman in Murshidabad`} />
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
