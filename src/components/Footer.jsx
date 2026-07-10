import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        padding: "2rem 1rem",
        background: "linear-gradient(to right, #141e30, #243b55)",
        color: "white",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "1rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.p
        whileHover={{
          scale: 1.1,
          textShadow: "0 0 8px #ffffff",
          color: "#f0f0f0",
        }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{
          margin: 0,
          cursor: "pointer",
          letterSpacing: "0.5px",
        }}
      >
        © 2025 Ahsanur Rahaman. All rights reserved.
      </motion.p>

      {/* Glowing animated gradient bar at bottom */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{
          height: "4px",
          marginTop: "1rem",
          background: "linear-gradient(90deg, #6c63ff, #00c6ff, #6c63ff)",
          boxShadow: "0 0 20px #00c6ff88",
          borderRadius: "8px",
        }}
      />
    </motion.footer>
  );
};

export default Footer;
