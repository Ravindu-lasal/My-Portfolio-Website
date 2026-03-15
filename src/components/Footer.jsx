import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Ravindu-Lasal",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/Ravindu-lasal",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:ravindulasal@gmail.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId.substring(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Decorative gradient line at top of footer */}
      <div className="footer-top-gradient"></div>

      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="footer-main"
          >
            <div className="footer-brand">
              <h3 className="footer-logo">
                Ravindu<span className="text-gradient">.Dev</span>
              </h3>
              <p className="footer-tagline">
                Turning ideas into high-quality, modern digital solutions.
              </p>
            </div>

            <div className="footer-nav">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="footer-link"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link glass-panel"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="footer-email">
                <a href="mailto:ravindulasal@gmail.com">ravindulasal@gmail.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-bottom"
          >
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>
                © {currentYear} Ravindu Lasal.
              </p>
              <p className="footer-note">
                Designed & Built with <motion.span
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={14} fill="currentColor" />
                </motion.span> using React
              </p>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="back-to-top glass-panel hover-glow"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
