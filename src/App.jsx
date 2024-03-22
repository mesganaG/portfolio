import { useState } from 'react'
import githubLogo from './assets/images/icon-github.svg'
import linkedinLogo from './assets/images/icon-linkedin.svg'
import githubLogoHover from './assets/images/icon-github-hover.svg'
import linkedinLogoHover from './assets/images/icon-linkedin-hover.svg'
import frontendMentorLogoHover from './assets/images/icon-frontend-mentor-hover.svg'
import frontendMentorLogo from './assets/images/icon-frontend-mentor.svg'
import dictionaryApp from "./assets/images/dictionary-app.png"
import advice from "./assets/images/advice-generator.png"
import profileImage from './assets/images/profile-image.png'
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

              <span>MesganaGeletu</span>
                  <div className="links">
                    <a href="https://github.com/mesganaG"><img className="github-logo" src={githubLogo} alt="github logo" 
                  onMouseOver={e => e.currentTarget.src = githubLogoHover}
                  onMouseOut={e => e.currentTarget.src = githubLogo}/></a>
                  <a href="https://www.linkedin.com/in/mesgana-geletu-303048261/"><img className="logo-icon" src={linkedinLogo} alt="linkedin logo" 
                    onMouseOver={e => e.currentTarget.src = linkedinLogoHover}
                    onMouseOut={e => e.currentTarget.src = linkedinLogo}/></a>
                  <a href="https://www.frontendmentor.io/profile/mesganaG"><img className="logo-icon" src={frontendMentorLogo} alt="front end mentor logo" 
                    onMouseOver={e => e.currentTarget.src = frontendMentorLogoHover}
                    onMouseOut={e => e.currentTarget.src = frontendMentorLogo}
                  /></a>
                  </div>
            </div>


            <div className="greeting-text-container">
              <p className='greeting'>
                Nice to meet you! 
                <span>I'm <span className="highlight">Mesgana Geletu.</span></span>
              </p>

              <p className='self-intro'>
                Based in Seattle, I'm a front-end developer passionate about building accessible web apps
                that users love.
              </p>

              <span className='highlight contact-me'>
                <a href="#contact-form">CONTACT ME</a>
              </span>

            </div>
          </div>

          <div className="experience-section">
            <ExperienceCard className="one" language="HTML" years="2" />
            <ExperienceCard language="CSS" years="2" />
            <ExperienceCard language="Javascript" years="2" />
            <ExperienceCard language="Accessibility" years="2" />
            <ExperienceCard language="React" years="2" />
            <ExperienceCard language="Sass" years="2" />
          </div>


          <div className="projects-section">
            <div className="heading-container">
              <span className="project-title">Projects</span>
              <span className='highlight contact-me'>
                <a href="#contact-form">CONTACT ME</a>
              </span>
            </div>

            <div className="projects-main-container">
              <ProjectCard
              className="project-card"
                image={dictionaryApp}
                name="Dictionary Web App"
                description="HTML CSS Javascript API"
                previewLink="https://mesganag.github.io/dictionary-web-app/"
                sourceCode="https://github.com/mesganaG/dictionary-web-app"
              />
              <ProjectCard
                image={advice}
                name="Advice Generator App"
                description="HTML CSS Javascript API"
                previewLink="https://mesganag.github.io/advice-generator-app/"
                sourceCode="https://github.com/mesganaG/advice-generator-app"
              />

              <ProjectCard
                image={advice}
                name="Advice Generator App"
                description="HTML CSS Javascript API"
                previewLink="https://mesganag.github.io/advice-generator-app/"
                sourceCode="https://github.com/mesganaG/advice-generator-app"
              />

              <ProjectCard
                image={advice}
                name="Advice Generator App"
                description="HTML CSS Javascript API"
                previewLink="https://mesganag.github.io/advice-generator-app/"
                sourceCode="https://github.com/mesganaG/advice-generator-app"
              />
             
              <ProjectCard
                image={advice}
                name="Kitchen Whisper "
                description="HTML CSS React(Vite) API"
                previewLink="https://kitchenwhisper.netlify.app/"
                sourceCode="https://github.com/mesganaG/KitchenWhisper"
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
