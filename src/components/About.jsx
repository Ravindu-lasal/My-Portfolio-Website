import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Sparkles } from "lucide-react";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices.",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces and interactions.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Performance",
      description: "Optimizing applications for maximum speed and efficiency.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working effectively with agile teams and agile workflows.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="about-header"
        >
          <div className="section-badge glass-panel">
            <Sparkles size={16} className="text-gradient" />
            <span>Discover</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="about-text glass-panel"
          >
            <div className="about-description">
              <p>
                A motivated individual with a background in Information Technology and Commerce. Passionate about web and mobile application development, with a growing interest in DevOps practices.
              </p>
              <br />
              <p>
                Eager to expand skills in automation, deployment, and cloud technologies while continuously learning and growing in the ever-evolving tech industry.
              </p>
              <br />
              <p>
                I believe in writing clean, maintainable code and creating user
                experiences that not only look great but also provide real value
                to users and businesses alike.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="about-features"
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="feature-card glass-panel hover-glow"
                >
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
