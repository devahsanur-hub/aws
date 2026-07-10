import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dashboardImg from "../assets/dash.jpg"; 

const skills = [
  { name: "React.js", level: 85, color: "#00bfff" },
  { name: "CI 3", level: 75, color: "#9428a7ff" },
  { name: "JavaScript", level: 75, color: "#007bff" },
  { name: "HTML & CSS", level: 90, color: "#ff6600" },
  { name: "PHP", level: 75, color: "#d2b731ff" },
  { name: "WordPress", level: 85, color: "#28a745" },
  { name: "Seo Optimisation", level: 90, color: "#c8545dff" },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="skills"
      style={{
        padding: "2rem 2rem",
        minHeight: "70vh",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      
      <div ref={ref} style={{ flex: 1, minWidth: "300px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>🛠️ My Skills</h2>

        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div
              style={{
                height: "10px",
                width: "100%",
                backgroundColor: "#ffffff33",
                borderRadius: "5px",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: { width: `${skill.level}%` },
                }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
                style={{
                  height: "100%",
                  backgroundColor: skill.color,
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
        ))}
      </div>


      <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
        <img
          src={dashboardImg}
          alt="Dashboard"
          style={{
            marginTop: "80px",
            maxWidth: "100%",
            borderRadius: "15px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </section>
  );
};

export default Skills;
