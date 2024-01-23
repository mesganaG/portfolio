import './footer.css'
import githubLogo from './assets/images/icon-github.svg'
import linkedinLogo from './assets/images/icon-linkedin.svg'
import twitterLogo from './assets/images/icon-twitter.svg' 

function Footer(props) {
    return (

        <div className="footer-main-container">
            
            <div className="contact-form">

                <div className="description">
                <span>Contact</span>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, 
                        and I’ll get back to you as soon as possible.
                </p>
                </div>

                <form action="">
                    <input type="text" placeholder="NAME"/>
                    <input type="email" placeholder="EMAIL"/>

                    <textarea name="Message" id="messageArea" cols="20" rows="5" placeholder={props.message }></textarea>   

                    <button type="submit">SEND MESSAGE</button>       
                </form>
            </div>

            <div className="bottom-navbar">
                <div className="logo">
                    <span>MesganaGeletu</span>
                </div>

                <div className="contact-list">

                    <a href="#"><img className="logo-icon" src={githubLogo} alt="github logo" /></a>
                    <a href="#"><img className="logo-icon" src={linkedinLogo} alt="linkedin logo" /></a>
                    <a href="#"><img className="logo-icon" src={twitterLogo} alt="twitter logo" /></a>

                </div>
            </div>
        </div>

    )
}

export default Footer;