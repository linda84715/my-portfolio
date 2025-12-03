import { useState } from "react";
import Photo1 from "../images/Swimlogo.png";
import Photo2 from "../images/Loanlogo.jpg";
import Photo3 from "../images/database.png";
import Photo4 from "../images/covid19.png";
import Photo5 from "../images/127W.png";
import Photo6 from "../images/SX.png";

interface ProjectCardProps {
  projectName: string;
  description: string;
  imgSrc: string;
  tools: string;
  date: string;
  githubLink?: string; //optional
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  description,
  imgSrc,
  tools,
  date,
  githubLink,
  demoLink,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // 點擊時翻轉卡片
  };

  return (
    <div
      className={`project-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="front">
        <img src={imgSrc} alt="project" className="project-image" />
        <h3>{projectName}</h3>
      </div>
      <div className="back">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-description">{description}</p>
        <p className="tools">Tool : {tools}</p>
        <p className="date">{date}</p>
        <div className="buttons">
          {githubLink && (
            <a
              href={githubLink}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// 父組件
const Projects = () => {
  return (
    <div className="wrap-project">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <ProjectCard // 通過 props 傳遞給 ProjectCard 子組件。
          projectName="Baby Swim School Portal"
          description="Developed a full-stack web application for a baby swim school, featuring real-time class scheduling, multi-child management, and an interactive progress tracking and reward system."
          imgSrc={Photo1}
          tools="React, Node.js, MySQL, HTML, CSS, TypeScript, REST API"
          date="04/2024"
          githubLink="https://github.com/linda84715/h2o-baby-swim-portal"
          demoLink="https://youtu.be/Gk3gCvA6rsw"
        />
        <ProjectCard
          projectName="Consumer Loan Default Prediction"
          description="Developed an end-to-end ML pipeline on a large consumer loan dataset to predict default risk. Performed EDA, feature selection, and model training using both Decision Tree and K-NN, comparing their performance and delivering insights to support lending decisions."
          imgSrc={Photo2}
          tools="Python, Machine learning, Data analysis, Scikit-learn, Matplotlib, NumPy, Pandas, PCA, K-NN, Linear Regression"
          date="02/2024"
          githubLink="https://github.com/linda84715/Predicting-Loan-Defaults"
          demoLink="https://github.com/linda84715/Predicting-Loan-Defaults/blob/main/Loan%20Defaults%20Case%20Study%20Jupyterbook.pdf"
        />
        <ProjectCard
          projectName="Library Management System Database Design"
          description="Led a team of four to design a Library Database System for resource tracking, member management, and loan transactions. Created ER/UML diagrams, translated to relational schema, and achieved 3NF normalisation."
          imgSrc={Photo3}
          tools="Database, Data Structure, MySQL, 3NF, ER/UML diagrams, draw.io"
          date="12/2023"
          githubLink="https://github.com/linda84715/Library-Database-System"
          demoLink="https://github.com/linda84715/Library-Database-System/blob/main/Library%20Database%20System_Linda.pdf"
        />
        <ProjectCard
          projectName="Covid-19 Data Analysis and Visualization Dashboard"
          description="Developed a Covid-19 dashboard fetching real-time data from Public Health England’s APIs. Performed data manipulation and visualization, created an interactive UI with iPython Widgets, and deployed it with Voila for web-based real-time presentation."
          imgSrc={Photo4}
          tools="Python, iPython Widgets, REST API, Pandas, Matplotlib, Binder, Voila, JSON"
          date="12/2023"
          githubLink="https://github.com/linda84715/COVID-19-DASHBOARD?tab=readme-ov-file"
          demoLink="https://github.com/linda84715/COVID-19-DASHBOARD/blob/main/Dashboard.ipynb"
        />
        <ProjectCard
          projectName="SpaceX Starlink Router & Power Module"
          description="As the product lead, I led the power module development for SpaceX’s Starlink High Performance and V3 kits, delivering a satellite-grade design successfully mass-produced and shipped to over 6 million users worldwide."
          imgSrc={Photo6}
          tools="Project Management, Supplier Coordination, DFM, Reliability, BOM/ECO, Manufacturing Transfer "
          date="2021-2023"
          demoLink="https://starlink.com/specifications?spec=1"
        />
        <ProjectCard
          projectName="Microsoft Surface Power Supply Innovation Project"
          description="Led cross-functional product development for Microsoft’s 127W power adapter—an especially challenging high-power, compact consumer PSU—accelerating the delivery timeline, improving thermal and safety performance, and contributing to the global launch of a high-volume product."
          imgSrc={Photo5}
          tools="Azure, MS Project, SAP, PLM, Product Development Management"
          date="2018-2019"
          demoLink="https://www.microsoft.com/en-gb/d/microsoft-surface-127w-power-supply/8m9zfxkg88d8?activetab=pivot:overviewtab"
        />
      </div>
    </div>
  );
};

export default Projects;
