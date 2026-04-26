import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import WaveBackground from "./WaveBackground";

const Hero = () => {
  return (
    <section
      className="relative w-full mx-auto"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      {/* Layer 0 – animated wave lines */}
      <WaveBackground />

      {/* Layer 1 – 3D Canvas fills entire hero */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
        }}
      >
        <ComputersCanvas />
      </div>

      {/* Layer 2 – text (sits on top of canvas) */}
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

      {/* Layer 3 – scroll indicator */}
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
