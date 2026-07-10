import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile1 from "../assets/home.jpg";
import profile2 from "../assets/home2.png";
import profile3 from "../assets/profile1.jpg";
import profile4 from "../assets/home4.jpg";

const images = [profile1, profile2, profile3, profile4];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonHover = {
  scale: 1.05,
  backgroundColor: "#e0a800",
  boxShadow: "0 8px 20px rgb(112, 101, 109)",
  transition: { duration: 0.3, ease: "easeInOut" },
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        padding: "2rem 1rem",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1f1c2c, #928dab)",
        color: "#fff",
        overflowX: "hidden",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="home-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          style={{
            flex: 1,
            minWidth: "280px",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <motion.h1
            variants={textVariant}
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              position: "relative",
              display: "inline-block",
              paddingBottom: "0.3rem",
            }}
          >
            Hi, I'm <span style={{ color: "#FFB400" }}>Ahsanur</span>
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "4px",
                width: "50%",
                backgroundColor: "#FFB400",
                borderRadius: "2px",
              }}
            ></span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              margin: "0 auto",
              maxWidth: "700px",
            }}
          >
            A full-stack developer with a love for creating beautiful, fast, and
            modern web apps using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. Let's build
            something great together!
          </motion.p>

          <motion.a
            href="#projects"
            style={{
              marginTop: "1.5rem",
              display: "inline-block",
              padding: "0.8rem 2rem",
              backgroundColor: "#FFB400",
              color: "#1f1c2c",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 5px 15px rgba(255, 180, 0, 0.4)",
            }}
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            variants={textVariant}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          <img
            src={images[currentImage]}
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              animation: "float 3s ease-in-out infinite",
            }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100vw;
        }

        @media (max-width: 768px) {
          .home-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          .home-container img {
            margin-top: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
