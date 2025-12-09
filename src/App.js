import React, { useEffect, useState } from 'react';
import './App.css';

// Navbar Component
const Navbar = ({ activeSection }) => (
  <header className="navbar">
    <ul className="nav-links">
      <li>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
      </li>
      <li>
        <a href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>Projects</a>
      </li>
      <li>
        <a href="#experience" className={activeSection === "contact-me" ? "active" : ""}>Contacts</a>
      </li>
    </ul>
  </header>
);

// Hero Component
const Hero = () => (
  <section id="about">
    <div className="hero">
      <div className="hero-text">
        <h1>
          I'm <span className="highlight">RICARDO DAVID</span>
        </h1>
        <p>Aspiring Software Developer</p>
        <a href="#contact-me" className="contact-button">Contact Me</a>
      </div>
      <div className="myImage">
        <img src="./images/_3604-no bg.png" alt="Ricardo David" />
      </div>
    </div>
  </section>
);

// About Component
const About = () => (
  <section id="about">
    <div className="about-content">
      <h2>About Me</h2>
      <p>
        A motivated and passionate software developer with nearly a year of
        professional experience specializing in automation and data polling systems.
        Skilled in building robust backend solutions using Python, async programming,
        and database technologies. A quick learner who adapts swiftly to high-pressure
        environments and excels at developing scalable, production-ready applications.
        Experienced in designing distributed systems, real-time data processing, and
        API integrations. Eager to leverage my expertise and dedication to contribute
        effectively to your company's goals while continuing to grow professionally.
      </p>
      <Skills />
    </div>
  </section>
);

// Skills Component
const Skills = () => (
  <section id="skills">
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {[
          { img: "./images/git.png", name: "Git Source Control" },
          { img: "./images/htmlcss.png", name: "HTML & CSS" },
          { img: "./images/python.png", name: "Python" },
          { img: "./images/csharp.png", name: "C#" },
          { img: "./images/C++.png", name: "C++" },
          { img: "./images/Java.png", name: "Java" },
          { img: "./images/JavaScript.png", name: "JavaScript" },
          { img: "./images/postgresql.png", name: "PostgreSQL" },
          { img: "./images/sqlalchemy.png", name: "SQLAlchemy" },
          { img: "./images/redis.png", name: "Redis" },
          { img: "./images/docker.png", name: "Docker" },
          { img: "./images/asyncio.png", name: "Async Python" },
          { img: "./images/websocket.png", name: "WebSockets" },
          { img: "./images/api.png", name: "REST APIs" },
          { img: "./images/ai-prompting.png", name: "AI Prompting" },
          { img: "./images/data-polling.png", name: "Data Polling" },
        ].map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Portfolio Component
const Portfolio = () => (
  <section id="portfolio">
    <h2>Projects</h2>
    <div className="portfolio-grid">
      {[
        {
          img: "./images/eye-hear-you.jpg",
          title: "Eye Hear You",
          description:
            "An Android application aimed at assisting visually impaired users through realtime object recognition, text-to-speech, and color correction features",
          link: "https://github.com/EP1C0829/Thesis",
        },
        {
          img: "./images/QR-attendance.jpg",
          title: "QR Attendance",
          description:
            "An attendance monitoring system for Emilio Aguinaldo College Cavite Campus, which tracks time in and time out using student ID QR codes. The system also sends SMS notifications to students",
          link: "https://github.com/EP1C0829/QR-Attendance",
        },
      ].map((project, index) => (
        <div key={index} className="portfolio-item">
          <img src={project.img} alt={project.title} />
          <div className="portfolio-overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="see-more-button">See More</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Experience Component
const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>
    <div className="timeline">
      {[
        {
          year: "2024",
          title: "Fandom Agency",
          duration: "July 2024 – Present",
          description:
            "Backend Developer specializing in data polling and real-time systems. Developed a distributed data collection platform using Python async programming, PostgreSQL, and Redis. Implemented WebSocket listeners for real-time message capture and built efficient historical data fetching with checkpoint recovery systems.",
        },
        {
          year: "2024",
          title: "PGOC",
          duration: "February 2024 – June 2024",
          description:
            "Automation Developer focused on Facebook Ads automation. Built automated posting and content management systems to streamline social media advertising workflows. Developed scripts and tools to improve efficiency in ad campaign management and scheduling.",
        },
        {
          year: "2023",
          title: "ROC.PH",
          duration: "June 2023 – July 2023",
          description:
            "240 Hours of On-The-Job Training. Full stack developer in the user interface (Work from Home). Responsibilities included debugging issues and enhancing website functionality, as well as adding a profile system to the website to improve user experience and data security.",
        },
        {
          year: "2020",
          title: "KIA MOTORS",
          duration: "January 2020 – February 2020",
          description:
            "90 Hours of Immersion. Information Management. Worked on organizing and sorting necessary office details for each car, ensuring proper categorization and retrieval of car data for inventory management and reporting purposes.",
        },
      ].map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <h4>{item.duration}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);


// Footer Component
const Footer = () => (
  <footer>
    <section id="contact-me">
      <h2>Contact Me</h2>
      <div className="contact-details">
      <p>Email: <a href="mailto:ricardoiiiadavid@gmail.com?subject=Inquiry from Portfolio Website&body=Hello Ricardo," className="email-link">ricardoiiiadavid@gmail.com</a></p>
      <p>Phone: +63 945 578 9716</p>
      <p>Location: Sabang, Dasmariñas Cavite</p>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/ricco.david.0892/" className="social-icon">Facebook</a>
        <a href="https://www.linkedin.com/in/ricardo-iii-david-63184727a" className="social-icon">LinkedIn</a>
        <a href="https://github.com/EP1C0829" className="social-icon">Github</a>
      </div>
    </section>
    <p>“Thanks for Scrolling”</p>
  </footer>
);

// App Component with Scroll-based Navigation Highlighting
const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const setActiveLink = () => {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove('active'));
      if (index >= 0) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href').slice(1) === sections[index].id) {
            link.classList.add('active');
            setActiveSection(sections[index].id); // Set active section based on scroll
          }
        });
      }
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    return () => {
      window.removeEventListener('scroll', setActiveLink);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;