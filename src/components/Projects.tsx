import { useState } from 'react';
import Photo1 from '../images/Swimlogo.png'
import Photo2 from '../images/Loanlogo.png'


interface ProjectCardProps {
  projectName: string;
  description: string;
  imgSrc: string;
  tools: string;
  date: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, description, imgSrc, tools, date, githubLink, demoLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // 點擊時翻轉卡片
  };

  return (
    <div className={`project-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="front">
        <img src={imgSrc} alt="project" className="project-image" />
        <h3>{projectName}</h3>
      </div>
      <div className="back">
        <h3 className="project-name">{projectName}</h3>
        <p className="project-description">{description}</p>
        <p className="tools">{tools}</p>
        <p className="date">{date}</p>
        <div className="buttons">
          <a href={githubLink} className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={demoLink} className="button" target="_blank" rel="noopener noreferrer">Demo</a>
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
          imgSrc={Photo1}  // 用實際圖片路徑替換
          tools="React, Node.js, MySQL, HTML, CSS, TypeScript, REST API"
          date="04/2024"
          githubLink="https://github.com/linda84715/h2o-baby-swim-portal"
          demoLink="https://youtu.be/Gk3gCvA6rsw"
        />
        <ProjectCard
          projectName="Consumer Loan Default Prediction"
          description="Trained a predictive model to assess loan default risk, achieving 93% accuracy using Decision Tree, outperforming other models like K-NN and Logistic Regression."
          imgSrc={Photo2}   // 用實際圖片路徑替換
          tools="Python, Machine learning, Data analysis"
          date="02/2024"
          githubLink="https://github.com/linda84715/Predicting-Loan-Defaults"
          demoLink="https://github.com/linda84715/Predicting-Loan-Defaults/blob/main/Loan%20Defaults%20Case%20Study%20Jupyterbook.pdf"
        />
      </div></div>
  );
};

export default Projects;
