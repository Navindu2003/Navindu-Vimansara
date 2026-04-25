import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaLeaf,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import profile from "./profile.jpg";
import { projects } from "./projectsData";
import ProjectDetail from "./ProjectDetail";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    "Agriculture",
    "Agri Technology",
    "Digital Agriculture",
    "Data Analysis",
    "Automation",
    "Sustainable Farming",
    "IoT Applications",
    "Precision Agriculture",
    "Smart Farming Systems",
    "Agricultural Data Analytics",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (window.scrollY < 200) current = "home";
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToProjects");

    if (shouldScroll === "true") {
      sessionStorage.removeItem("scrollToProjects");

      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <FaLeaf className="logo-icon" />
          Navindu
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a
            href="#home"
            onClick={closeMenu}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <section className="section hero" id="home">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        <div className="content hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="small-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Hi, I’m <span>Navindu Vimansara</span>
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Undergraduate | Smart Agriculture | Data Driven Agriculture
            </motion.h3>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              I am an Agriculture undergraduate with a strong interest in
              Agri-Technology, ICT-driven solutions, and programming. I am
              committed to integrating agricultural knowledge with modern
              technologies such as data analytics, Internet of Things, and smart
              farming systems to enhance productivity, promote sustainability,
              and support informed decision-making in agriculture.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <a href="#projects" className="btn">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-box"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
          >
            <div className="image-glow"></div>
            <img src={profile} alt="Profile" className="profile-image" />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Scroll Down
        </motion.a>
      </section>

      <section className="section about" id="about">
        <motion.div
          className="content section-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>About Me</h2>
          <p>
            I am an Agriculture undergraduate with a strong interest in
            Agri-Technology, ICT-driven solutions, and programming. I am
            committed to integrating agricultural knowledge with modern
            technologies such as data analytics, Internet of Things, and smart
            farming systems to enhance productivity, promote sustainability, and
            support informed decision-making in agriculture.
          </p>
        </motion.div>
      </section>

      <section className="section skills" id="skills">
        <motion.div
          className="content section-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.08, y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section projects" id="projects">
        <motion.div
          className="content section-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Projects</h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={`/project/${project.id}`} className="project-link">
                  <motion.div
                    className="project-card"
                    whileHover={{ y: -10, scale: 1.03 }}
                  >
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="project-cover"
                    />
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <span className="project-btn">View Details</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section contact" id="contact">
        <motion.div
          className="content section-card contact-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Contact Me</h2>

          <div className="contact-links">
            <motion.a
              href="mailto:navinduvimansara@gmail.com"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaEnvelope className="contact-icon" />
              <span>navinduvimansara@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+94766166650"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaPhoneAlt className="contact-icon" />
              <span>+94 76 616 6650</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/navindu-vimansara-62a498404"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn Profile</span>
            </motion.a>

            <motion.a
              href="https://github.com/Navindu2003"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaGithub className="contact-icon" />
              <span>GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h3>Navindu Vimansara</h3>
          <p>Smart Agriculture | IoT | Data Driven Solutions</p>

          <div className="footer-links">
            <a
              href="https://github.com/Navindu2003"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/navindu-vimansara-62a498404"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:navinduvimansara@gmail.com">Email</a>
          </div>

          <span className="footer-copy">
            © 2025 Navindu Vimansara. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;