import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";
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
        "Creating beautiful and intuitive user interfaces and experiences.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-header"
        >
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
            viewport={{ once: true }}
            className="about-text"
          >
            <div className="about-description">
              <p>
                A motivated individual with a background in Information Technology and Commerce. Passionate about web and mobile application development, with a growing interest in DevOps practices. 
              </p>
              <p>
                Eager to expand skills in automation, deployment, and cloud technologies while continuously learning and growing in the tech industry.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user
                experiences that not only look great but also provide real value
                to users.
              </p>
            </div>

            {/* <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="about-features"
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="feature-card"
                >
                  <div className="feature-icon">{feature.icon}</div>
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
