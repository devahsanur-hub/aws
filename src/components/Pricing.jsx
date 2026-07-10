import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    name: "Basic Website",
    price: "Rs. 7,500",
    note: "starting",
    text: "Perfect for a personal portfolio, simple business profile or service landing page.",
    features: ["1-3 pages", "Mobile responsive", "Contact/WhatsApp CTA", "Basic animation", "SEO starter setup"],
  },
  {
    name: "Professional",
    price: "Rs. 15,000",
    note: "popular",
    text: "Best for businesses that need a polished website with stronger sections and lead focus.",
    features: ["5-7 pages", "Premium UI/UX", "Animated sections", "Project/service showcase", "Speed optimization", "1 month support"],
    featured: true,
  },
  {
    name: "Business Plus",
    price: "Rs. 25,000+",
    note: "custom",
    text: "For ecommerce, dashboards, booking, admin panel, WordPress or custom React applications.",
    features: ["Custom pages", "CMS/admin options", "Payment/booking flow", "Advanced SEO setup", "Analytics integration", "Priority support"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="section-inner">
        <p className="section-kicker">Pricing</p>
        <h2 className="section-title">Website package starts from Rs. 7,500.</h2>
        <p className="section-lead">
          Clear starting packages for web related work. Final price depends on
          pages, features, content, design level and delivery time.
        </p>

        <div className="grid pricing-grid">
          {plans.map((plan, index) => (
            <motion.article
              className={`pricing-card glass-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <p className="section-kicker">{plan.note}</p>
              <h3 className="card-title">{plan.name}</h3>
              <p className="card-text">{plan.text}</p>
              <div className="price">
                {plan.price} <small>/ project</small>
              </div>
              <ul className="check-list">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <FaCheck /> <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "btn btn-primary" : "btn btn-ghost"} href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
                <FaWhatsapp /> Book This Plan
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
