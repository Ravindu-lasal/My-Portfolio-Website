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
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-greeting"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-name"
            >
              <span className="text-gradient">Ravindu Lasal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-title"
            >
              Full-Stack Developer & System Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-description"
            >
              Passionate web developer with front-end and back-end experience. Interested in DevOps, automation, and cloud computing, focused on building efficient, user-friendly solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hero-actions"
            >
              <button className="btn-primary">
                <Download size={20} />
                
              </button>
              <button className="btn-secondary" onClick={() => scrollToNext()}>
                View My Work
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hero-social"
            >
              <a href="https://github.com/Ravindu-lasal" className="social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-image"
          >
            {/* Replace the code snippet below with your image */}
            <img
              src="/myimg1.jpg"
              alt="Your Name"
              className="profile-image"
              style={{ borderRadius: "50%", width: 450, height: 450, objectFit: "cover" }}
            />
            {/* Optionally keep the code snippet below your image */}
            {/* 
            <div className="image-placeholder">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"creative"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">function</span>
                  <span className="code-function"> buildAmazingThings</span>
                  <span className="code-bracket">()</span>
                  <span className="code-bracket"> {"{"}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-keyword">return</span>
                  <span className="code-string"> "innovation"</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{"}"}</span>
                </div>
              </div>
            </div>
            */}
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="scroll-indicator"
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
