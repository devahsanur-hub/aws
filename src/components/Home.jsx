import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaCode,
  FaLaptopCode,
  FaMagic,
  FaMobileAlt,
  FaPlay,
  FaRocket,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";
import softwareProductKit from "../assets/software-product-kit.png";

const videoTabs = [
  {
    key: "website",
    label: "Website",
    icon: <FaLaptopCode />,
    title: "Premium website design",
    text: "Portfolio, company, service, ecommerce and landing pages with clean professional UI.",
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: <FaMobileAlt />,
    title: "Mobile responsive build",
    text: "Every section is planned for phone, tablet and desktop so clients can browse smoothly.",
  },
  {
    key: "seo",
    label: "SEO",
    icon: <FaSearch />,
    title: "SEO ready launch",
    text: "Fast loading, structured content, meta basics and business-focused call-to-action flow.",
  },
];

const heroHighlights = [
  "3D visual UI",
  "Smooth animation",
  "Mobile first UX",
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(videoTabs[0]);

  return (
    <section id="home" className="section hero video-hero">
      <div className="section-inner hero-video-layout">
        <motion.div
          className="hero-copy-panel"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker">Ahsanur Web Solution</p>
          <h1>
            Modern <span>3D website</span> design for your business.
          </h1>
          <p className="section-lead">
            Premium UI/UX, animated video-style sections, mobile responsive
            layout and launch-ready web solutions that make your brand look sharp.
          </p>

          <div className="hero-highlight-row" aria-label="Website highlights">
            {heroHighlights.map((item) => (
              <span key={item}>
                <FaCheckCircle /> {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#pricing">
              Start Project <FaArrowRight />
            </a>
            <a className="btn btn-ghost" href="https://wa.me/917866030833" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>7.5K+</strong>
              <span>basic website start</span>
            </div>
            <div className="stat">
              <strong>13+</strong>
              <span>client websites</span>
            </div>
            <div className="stat">
              <strong>SEO</strong>
              <span>launch ready setup</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="website-video glass-card hero-3d-card" initial={{ opacity: 0, scale: 0.94, rotateY: -7 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="video-stage">
            <div className="video-bg-grid" />
            <div className="video-light-beam" />
            <motion.img
              className="software-product-kit"
              src={softwareProductKit}
              alt="Modern software website design kit by Ahsanur Rahaman"
              animate={{ y: [0, -12, 0], rotate: [0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            />
            <motion.div className="video-orbit" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 24, ease: "linear" }} />
            <motion.div className="video-browser main-3d-screen" animate={{ y: [0, -10, 0], rotateY: [-7, -3, -7] }} transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut" }}>
              <div className="browser-top"><span /><span /><span /></div>
              <div className="screen-toolbar">
                <span>Live Preview</span>
                <strong>UI/UX</strong>
              </div>
              <div className="browser-hero-line" />
              <div className="browser-row">
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="browser-content">
                <div className="browser-copy">
                  <span />
                  <strong />
                  <p />
                  <p />
                </div>
                <motion.div className="browser-preview" animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 3.2 }} />
              </div>
            </motion.div>

            <motion.div className="floating-ui-card analytics-card glass-card" animate={{ x: [0, 8, 0], y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}>
              <span><FaChartLine /> Growth</span>
              <strong>+68%</strong>
              <div className="mini-bars"><i /><i /><i /><i /></div>
            </motion.div>

            <motion.div className="floating-ui-card mobile-preview glass-card" animate={{ y: [0, 12, 0], rotateZ: [-2, 1, -2] }} transition={{ repeat: Infinity, duration: 5.6, ease: "easeInOut" }}>
              <div className="mobile-notch" />
              <div className="mobile-glow" />
              <span />
              <strong />
              <p />
              <p />
            </motion.div>

            <motion.div className="code-panel video-code glass-card" animate={{ x: [0, 10, 0], y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5.4, ease: "easeInOut" }}>
              <div className="panel-title"><FaCode /> React Build</div>
              <code>&lt;ModernPortfolio /&gt;</code>
              <code>ux: polished;</code>
              <code>motion: smooth;</code>
            </motion.div>

            <div className="video-play-strip glass-card">
              <div className="play-button"><FaPlay /></div>
              <div>
                <strong>3D website video preview</strong>
                <div className="timeline"><motion.span animate={{ width: ["10%", "82%", "44%"] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }} /></div>
              </div>
            </div>
          </div>

          <div className="video-tabs" role="tablist" aria-label="Website information">
            {videoTabs.map((tab) => (
              <button
                className={activeTab.key === tab.key ? "active" : ""}
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="video-info-card"
              key={activeTab.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="icon-box">{activeTab.icon}</div>
              <div>
                <h3 className="card-title">{activeTab.title}</h3>
                <p className="card-text">{activeTab.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div className="launch-chip video-launch" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}>
            <FaRocket /> Launch Ready
          </motion.div>
          <motion.div className="magic-chip" animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 3.1, ease: "easeInOut" }}>
            <FaMagic /> Premium UX
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
