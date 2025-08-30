import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Hotel-Management-System",
      description:
        "A Laravel-based hotel booking web app, admin management, responsive design, and features for browsing rooms, making reservations, and managing bookings.",
      image: "/image/1.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Laravel"],
      category: "fullstack",
      github: "https://github.com/Ravindu-lasal/Hotel-Booking-and-Management-System",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Beauty-Salon-Booikng",
      description:
        "An online beauty salon booking system for easy appointment, staff and service management with a simple, user-friendly interface",
      image: "/image/2.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      category: "fullstack",
      github: "https://github.com/Ravindu-lasal/Beauty-Salon-Booikng",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "15+ javascript Projects",
      description:
        "I build is a collection of 15+ small JavaScript projects that demonstrate various web development skills and techniques.",
      image: "/image/3.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Ravindu-lasal/20-projects-JavaScript",
      live: "https://ravindu-lasal.github.io/20-projects-JavaScript/",
      featured: false,
    },
    {
      id: 4,
      title: "bus timetable booking system",
      description:
        "A web-based bus booking system for viewing schedules, searching routes, and reserving seats online with easy booking management.",
      image: "/image/6.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with modern design, smooth animations, and contact form integration.",
      image: "/image/7.png",
      technologies: ["React", "Vite"],
      category: "frontend",
      github: "#",
      live: "http://ravindulasal.me/",
      featured: false,
    },
    {
      id: 6,
      title: "Campus management System",
      description:"A simple C# app for managing student and teacher details in a campus, making it easy to store and update information.",
      image: "/image/5.jpg",
      technologies: ["C#", " MySQL"],
      category: "fullstack",
      github: "https://github.com/Ravindu-lasal/Campus-Management-System",
      live: "#",
      featured: true,
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          <Filter size={20} />
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${
                activeFilter === filter.key ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={`project-card ${project.featured ? "featured" : ""}`}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      className="project-link"
                      aria-label="View source code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-projects"
          >
            <p>No projects found for the selected filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
