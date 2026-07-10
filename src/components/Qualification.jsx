import React from "react";
import { motion } from "framer-motion";

const qualifications = [
  "Bachelor of Computer Application (BCA)",
  "Higher Secondary (Arts)",
  "Secondary School Certificate",
];

const Qualification = () => {
  return (
    <section
      id="qualification"
      style={{
        padding: "4rem 2rem ",
        minHeight: "70vh",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        color: "#fff",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        🎓 Qualification
      </motion.h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {qualifications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "2rem",
              borderRadius: "15px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
              minWidth: "250px",
              maxWidth: "300px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "transform 0.3s ease",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            <h3 style={{ fontSize: "1.2rem", color: "#fff" }}>{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
