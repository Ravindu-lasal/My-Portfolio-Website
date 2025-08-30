import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovation Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Led the development of responsive web applications using React and TypeScript. Collaborated with UX/UI designers to implement pixel-perfect designs and improved application performance by 40%.",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
      ],
      website: "https://techinnovation.com",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed and maintained full-stack web applications using MERN stack. Built RESTful APIs, implemented authentication systems, and worked closely with product managers to deliver features on time.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
      website: "https://digitalsolutions.com",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Web Studio",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      description:
        "Created responsive websites and web applications for various clients. Focused on modern JavaScript frameworks and optimized user experiences across different devices and browsers.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "WordPress", "Figma"],
      website: "https://creativewebstudio.com",
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2018 - 2019",
      description:
        "Started my career as a junior developer working on various web projects. Gained experience in HTML, CSS, JavaScript, and learned about responsive design principles and web accessibility.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      website: "https://startuphub.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-timeline"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>

              <motion.div
                className="experience-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="experience-header-card">
                  <div className="experience-title-group">
                    <h3 className="experience-title">{experience.title}</h3>
                    <div className="experience-company">
                      <span>{experience.company}</span>
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                        aria-label={`Visit ${experience.company} website`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="experience-meta">
                    <div className="experience-period">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
