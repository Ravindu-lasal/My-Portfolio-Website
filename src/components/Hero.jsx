import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="availability-badge glass-panel"
            >
              <span className="status-dot"></span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-name"
            >
              Hi, I'm <br />
              <span className="text-gradient">Ravindu Lasal</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-title"
            >
              Full-Stack Developer & System Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-description"
            >
              Passionate engineer crafting dynamic digital experiences. Focused on building scalable, user-friendly solutions from frontend aesthetics to robust backend architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-actions"
            >
              <button className="btn-primary hover-glow">
                <span>Download CV</span>
                <Download size={18} />
              </button>
              <button className="btn-secondary" onClick={scrollToNext}>
                View My Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hero-social"
            >
              <a href="https://github.com/Ravindu-lasal" className="social-link" aria-label="GitHub" target="_blank" rel="noreferrer">
                <Github size={22} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="mailto:contact@ravindulasal.me" className="social-link" aria-label="Email">
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.4 }}
            className="hero-image-wrapper"
          >
            <div className="image-glow"></div>
            <div className="image-container glass-panel">
              <img
                src="/myimg1.jpg"
                alt="Ravindu Lasal"
                className="profile-image"
              />
            </div>

            <motion.div
              className="floating-badge badge-1 glass-panel"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-gradient font-bold">5+</span>
              <span>Projects Completed</span>
            </motion.div>

            <motion.div
              className="floating-badge badge-2 glass-panel"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span>Full Stack</span>
              <span className="text-gradient font-bold">Development</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="scroll-indicator glass-panel hover-glow"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
