import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 80, icon: "🎨" },
        { name: "Boostrap CSS", level: 65, icon: "💨" },
        { name: "Tailwind CSS", level: 45, icon: "💨" },
        { name: "JavaScript", level: 60, icon: "🟨" },
        { name: "React", level: 50, icon: "⚛️" },
        { name: "TypeScript", level: 20, icon: "🔷" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 70, icon: "🐘" },
        { name: "MySql", level: 60, icon: "🛢️" },
        { name: "Node.js", level: 25, icon: "🟢" },
        { name: "Express", level: 10, icon: "⚡" },
        { name: "MongoDB", level: 20, icon: "🍃" },
        { name: "REST APIs", level: 45, icon: "🔗" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "GitHub", level: 70, icon: "🐙" },
        { name: "VS Code", level: 85, icon: "🖥️" },
        { name: "NetBeans", level: 60, icon: "🧩" },
        { name: "Postman", level: 55, icon: "📬" },
        { name: "Workbench", level: 65, icon: "🛠️" },
        { name: "Figma", level: 55, icon: "🎯" },
        
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-content"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
