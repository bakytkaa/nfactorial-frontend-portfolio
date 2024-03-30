import { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { HeroSection } from "./components/sections/HeroSection.jsx";
import { AboutSection } from "./components/sections/AboutSection.jsx";
import { ExperiencesSection } from "./components/sections/ExperiencesSection.jsx";
import { ProjectsSection } from "./components/sections/ProjectsSection.jsx";

function App() {
  const [siteNavigations, setSiteNavigations] = useState([
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Experiences",
      link: "#experiences",
    },
    {
      label: "Projects",
      link: "#projects",
    },
    {
      label: "Contacts",
      link: "#contacts",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      title: "SAB Scanner Application",
      images: [
        "/images/project1.png",
        "/images/project2.png",
        "/images/project3.png",
      ],
      description:
        "Our application offers a comprehensive solution for website analysis by scanning its content, headers, and connection type based on the provided URL. Once the scan is complete, the gathered data is then fed into a neural network, enabling users to receive tailored recommendations for optimization and security enhancement. By utilizing advanced algorithms, we empower website owners and administrators to make informed decisions regarding their online presence. Our approach not only streamlines the process of assessing website performance and security but also ensures proactive measures are taken to maintain a robust online environment. With the seamless integration of scanning technology and neural networks, our application stands as a versatile tool for optimizing website functionality and fortifying against potential threats.",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      years: "2020 - 2024",
      text: "Student at International University of Information Technology",
    },
    {
      years: "2021",
      text: "SIS admin - Otabasy bank",
    },
    {
      years: "2024",
      text: "tutor - CES",
    },
  ]);

  const [contacts, setContacts] = useState([
    {
      component: FaGithub,
      link: "https://github.com/bakytkaa",
    },
    {
      component: FaInstagram,
      link: "https://www.instagram.com/bakytkaa",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="page">
          <Header navs={siteNavigations} />

          <HeroSection id="hero" />
          <AboutSection id="about" />
          <ExperiencesSection
            id="experiences"
            experiences={experiences}
          />
          <ProjectsSection
            id="projects"
            projects={projects}
          />

          <Footer
            id="contacts"
            contacts={contacts}
          />
        </div>
      </div>
    </>
  );
}

export default App;
