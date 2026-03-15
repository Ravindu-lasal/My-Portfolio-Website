import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, Sparkles } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Hotel Booking System",
      description:
        "A Laravel-based hotel booking web app, admin management, responsive design, and features for browsing rooms, making reservations, and managing bookings.",
      image: "/image/1.jpg",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
      category: "fullstack",
      github: "https://github.com/Ravindu-lasal/Hotel-Booking-and-Management-System",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Beauty Salon Booking",
      description:
        "An online beauty salon booking system for easy appointment, staff and service management with a simple, user-friendly interface.",
      image: "/image/2.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      category: "fullstack",
      github: "https://github.com/Ravindu-lasal/Beauty-Salon-Booikng",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "15+ JavaScript Projects",
      description:
        "A collection of 15+ small JavaScript projects that demonstrate various core web development skills and DOM manipulation techniques.",
      image: "/image/3.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      category: "frontend",
      github: "https://github.com/Ravindu-lasal/20-projects-JavaScript",
      live: "https://ravindu-lasal.github.io/20-projects-JavaScript/",
      featured: false,
    },
    {
      id: 4,
      title: "Bus Timetable System",
      description:
        "A web-based bus booking system for viewing schedules, searching routes, and reserving seats online with easy booking management.",
      image: "/image/6.jpg",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website featuring a modern premium design, smooth Framer Motion animations, and a sleek glassmorphism UI.",
      image: "/image/7.png",
      technologies: ["React", "Vite", "Framer Motion", "CSS"],
      category: "frontend",
      github: "#",
      live: "http://ravindulasal.me/",
      featured: true,
    },
    {
      id: 6,
      title: "Campus Management System",
      description: "A desktop application built with C# for managing student and teacher details efficiently, providing easy CRUD operations.",
      image: "/image/5.jpg",
      technologies: ["C#", "MySQL", ".NET"],
      category: "fullstack",
      github: "https://github.com/Ravindu-lasal/Campus-Management-System",
      live: "#",
      featured: false,
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
          viewport={{ once: true, margin: "-100px" }}
          className="projects-header"
        >
          <div className="section-badge glass-panel">
            <Sparkles size={16} className="text-gradient" />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of my recent work spanning frontend interfaces to complex full-stack systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="project-filters glass-panel"
        >
          <Filter size={18} className="filter-icon" />
          <div className="filter-btn-group">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? "active" : ""
                  }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {activeFilter === filter.key && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="active-filter-bg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="filter-label">{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className={`project-card glass-panel ${project.featured ? "featured" : ""}`}
                whileHover={{ y: -10 }}
              >
                {project.featured && (
                  <div className="featured-badge text-gradient">Featured</div>
                )}

                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="project-link glass-panel"
                        aria-label="View source code"
                        target="_blank" rel="noreferrer"
                      >
                        <Github size={22} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.live}
                        className="project-link glass-panel"
                        aria-label="View live demo"
                        target="_blank" rel="noreferrer"
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag glass-panel">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-projects glass-panel"
          >
            <p>No projects found for the selected category. Please try another filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
