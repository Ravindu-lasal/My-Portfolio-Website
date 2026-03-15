import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", icon: "🎨" },
        { name: "Bootstrap", icon: "💨" },
        { name: "Tailwind", icon: "🌊" },
        { name: "JavaScript", icon: "🟨" },
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "PHP", icon: "🐘" },
        { name: "MySQL", icon: "🛢️" },
        { name: "Laravel", icon: "🔴" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST APIs", icon: "🔗" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "🐙" },
        { name: "VS Code", icon: "🖥️" },
        { name: "Postman", icon: "📬" },
        { name: "Figma", icon: "🎯" },
        { name: "Docker", icon: "🐳" },
        { name: "Linux", icon: "🐧" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="skills-header"
        >
          <div className="section-badge glass-panel">
            <Sparkles size={16} className="text-gradient" />
            <span>Expertise</span>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the technologies and tools I use to build robust digital solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="skills-content-simple"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-simple">
              <h3 className="category-title-simple text-gradient">{category.title}</h3>
              <div className="skills-icon-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-icon-item glass-panel hover-glow"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <span className="skill-emoji">{skill.icon}</span>
                    <span className="skill-label">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
