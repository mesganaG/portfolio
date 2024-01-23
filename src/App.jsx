import { useState } from 'react'
import githubLogo from './assets/images/icon-github.svg'
import linkedinLogo from './assets/images/icon-linkedin.svg'
import twitterLogo from './assets/images/icon-twitter.svg'
import frontendMentorLogo from './assets/images/icon-frontend-mentor.svg'
import project1 from "./assets/images/thumbnail-project-1-large.webp"
import project2 from "./assets/images/thumbnail-project-2-large.webp"
import profileImage from './assets/images/image-profile-desktop.webp'
import './App.css'
import ExperienceCard from './experienceCard'
import ProjectCard from './projectCard'
import Footer from './footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <main>
        <div className="main-container">

          <div className="top-section">
            <div className="profile-img-container">
              <img src={profileImage} alt="profile image" />
            </div>
            <div className="nav-bar">

              <span>mesganageletu</span>
                  <div className="links">
                    <a href="#"><img className="logo-icon" src={githubLogo} alt="github logo" /></a>
                    <a href="#"><img className="logo-icon" src={linkedinLogo} alt="linkedin logo" /></a>
                    <a href="#"><img className="logo-icon" src={twitterLogo} alt="twitter logo" /></a>
                    <a href="#"><img className="logo-icon" src={twitterLogo} alt="twitter logo" /></a>
                  </div>
            </div>


            <div className="greeting-text-container">
              <p className='greeting'>
                Nice to meet you! <span>I'm <span className="highlight">Mesgana Geletu.</span></span>
              </p>

              <p className='self-intro'>
                Based in Seattle, I'm a front-end developer passionate about building accessible web apps
                that users love.
              </p>

              <span className='highlight contact-me'>CONTACT ME</span>

            </div>
          </div>

          <div className="experience-section">
            <ExperienceCard className="one" language="HTML" years="2" />
            <ExperienceCard language="CSS" years="4" />
            <ExperienceCard language="Javascript" years="2" />
            <ExperienceCard language="Accessibility" years="2" />
            <ExperienceCard language="React" years="2" />
            <ExperienceCard language="Sass" years="2" />
          </div>


          <div className="projects-section">
            <div className="heading-container">
              <span className="project-title">Projects</span>
              <span className="highlight contact-me">CONTACT ME</span>
            </div>

            <div className="projects-main-container">
              <ProjectCard
              className="project-card"
                image={project1}
                name="DESIGN PORTFOLIO"
                description="HTML CSS"
                previewLink="https://github.com/"
                sourceCode="https://github.com/"
              />
              <ProjectCard
                image={project2}
                name="E-LEARNING LANDING PAGE"
                description="HTML CSS"
                previewLink="https://github.com/"
                sourceCode="https://github.com/"
              />
              <ProjectCard
                image={project2}
                name="E-LEARNING LANDING PAGE"
                description="HTML CSS"
                previewLink="https://github.com/"
                sourceCode="https://github.com/"
              />
              <ProjectCard
                image={project2}
                name="E-LEARNING LANDING PAGE"
                description="HTML CSS"
                previewLink="https://github.com/"
                sourceCode="https://github.com/"
              />
              <ProjectCard
                image={project2}
                name="E-LEARNING LANDING PAGE"
                description="HTML CSS"
                previewLink="https://github.com/"
                sourceCode="https://github.com/"
              />
              <ProjectCard
                image={project2}
                name="E-LEARNING LANDING PAGE"
                description="HTML CSS"
                previewLink="https://github.com/"
                sourceCode="https://github.com/"
              />
            </div>
          </div>
        </div>

      </main>

      <div className="footer-section">
        <Footer message="MESSAGE" />

      </div>

    </>
  )
}

export default App
