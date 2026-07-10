// import React from "react";
// import { motion } from "framer-motion";
// import reactIcon from "../assets/react.png";
// import jsIcon from "../assets/javascript.png";
// import phpIcon from "../assets/php.png";

// const iconVariants = {
//   animate: {
//     y: [0, -15, 0],
//     rotate: [0, 360],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "linear",
//     },
//   },
// };

// const About = () => {
//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
//       {/* Floating Icons */}
//       <motion.img
//         src={reactIcon}
//         alt="React"
//         className="w-20 h-20 absolute top-10 left-10 opacity-20"
//         variants={iconVariants}
//         animate="animate"
//       />
//       <motion.img
//         src={jsIcon}
//         alt="JavaScript"
//         className="w-20 h-20 absolute bottom-20 right-16 opacity-20"
//         variants={iconVariants}
//         animate="animate"
//       />
//       <motion.img
//         src={phpIcon}
//         alt="PHP"
//         className="w-20 h-20 absolute top-1/2 right-1/4 opacity-20"
//         variants={iconVariants}
//         animate="animate"
//       />

//       {/* Content Box */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="max-w-4xl w-full text-center z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-lg shadow-cyan-500/20 border border-white/10 hover:shadow-blue-500/30 transition-all duration-500"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg">
//           About Me
//         </h2>
//         <p className="text-lg md:text-xl leading-relaxed text-gray-200 tracking-wide font-light">
//           Ami <span className="text-yellow-300 font-semibold">Ahsanur Rahaman (Ashu)</span>, ekjon passionate full-stack web developer.
//           Amar expertise ache <span className="text-blue-400">React</span>, <span className="text-yellow-400">JavaScript</span>, ebong
//           <span className="text-purple-400"> PHP</span> er moto powerful technology te.
//           Ami always modern, optimized and animated user interface create korte bhalobashi.
//           Amar coding style clean and performance-focused. Amar goal holo user-friendly and smart application build kora.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default About;
