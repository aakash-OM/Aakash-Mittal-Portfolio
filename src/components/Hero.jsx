import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 18 });

  const bgX = useTransform(smoothX, [0, 1], ["6%", "-6%"]);
  const bgY = useTransform(smoothY, [0, 1], ["4%", "-4%"]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <section
      className="relative w-full mx-auto"
      style={{ height: "100vh", overflow: "hidden", backgroundColor: "#050816" }}
      onMouseMove={handleMouseMove}
    >
      {/* Layer 0 – parallax + breathing hero background */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-12%",
          backgroundImage: "url('/herobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          x: bgX,
          y: bgY,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
      />

      {/* Layer 1 – subtle vignette so text stays readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(5,8,22,0.55) 0%, rgba(5,8,22,0.05) 55%, rgba(5,8,22,0.45) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Layer 2 – 3D Canvas */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <ComputersCanvas />
      </div>

      {/* Layer 3 – text */}
      <div
        className={`${styles.paddingX} absolute max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ top: 120, left: 0, right: 0, zIndex: 10 }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I&apos;m{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>
          <p
            className={styles.heroSubText}
            style={{ color: "var(--hero-subtext)", marginTop: "0.5rem" }}
          >
            {personalInfo.role},
            <br className="sm:block hidden" />
            building AI-powered products that solve real-world problems.
          </p>
        </div>
      </div>

      {/* Layer 4 – scroll indicator */}
      <div
        className="absolute w-full flex justify-center items-center"
        style={{ bottom: 32, zIndex: 10 }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
