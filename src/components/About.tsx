import grad from "../images/grad1.png"

const About = () => {
  return (
    <div className="about-container">

        <img src={grad} className="about-image" />
        <div>
          <h2>About Me</h2>
          <p className="education">
            MSc - Computing and Information Systems [Distinction], Queen Mary University of London <br />
            BSc - Industrial Engineering and Management, National Taipei University of Technology
          </p>

          <p className="description">
            I’m a passionate full-stack developer and experienced project manager with over six years of experience leading cross-functional teams and delivering new development projects. I specialize in building responsive web applications and predictive analytics models using Python, React, Node.js, JavaScript, TypeScript, HTML, and CSS.<br /> <br />
            Notably, I’ve led projects like developing next-generation power supplies for SpaceX’s Starlink system and Microsoft Surface Laptop series, contributing to a combined annual revenue increase of $35 million.
          </p></div>
      </div>

  );
};

export default About;
