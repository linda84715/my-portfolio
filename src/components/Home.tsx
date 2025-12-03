import headImage from "../images/head1.jpg";
import resume from "../images/resume1.1.pdf";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="home-wrapper">
        <div className="text-container">
          <p className="greeting">Hi,</p>
          <p className="name">
            I am <span className="name-highlight">Linda Lin</span>
          </p>
          <p className="description">
            With a strong background in industrial engineering and computer
            science, and over six years of project management experience, I
            specialize in developing responsive web applications and managing
            new development projects.
          </p>
          <div className="contact-links">
            <a href={resume} className="contact-link">
              <i className="fas fa-file-alt"></i> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/linda-lin-7b5a6b174/"
              className="contact-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>

            <a href="mailto:linda84715@gmail.com" className="contact-link">
              <i className="fas fa-envelope"></i> E-mail
            </a>
            <a href="tel:+44 7901040806" className="contact-link">
              <i className="fas fa-phone"></i> Mobile
            </a>
            <a href="https://github.com/linda84715" className="contact-link">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={headImage} alt="Linda Lin" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
