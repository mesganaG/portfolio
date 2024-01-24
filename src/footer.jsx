import './footer.css'
import githubLogo from './assets/images/icon-github-white.svg'
import linkedinLogo from './assets/images/icon-linkedin-white.svg'
import frontendMentorLogo from './assets/images/icon-frontend-mentor-white.svg' 
import githubLogoHover from './assets/images/icon-github-hover.svg'
import linkedinLogoHover from './assets/images/icon-linkedin-hover.svg'
import frontendMentorLogoHover from './assets/images/icon-frontend-mentor-hover.svg'
import {useForm} from 'react-hook-form';



function Footer(props) {

    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (

        <div className="footer-main-container">
            
            <div className="contact-form">

                <div className="description">
                <span>Contact</span>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, 
                        and I’ll get back to you as soon as possible.
                </p>
                </div>

                <form id="contact-form" action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <input type="text" placeholder="NAME"/>
                    <input id="emailInput" type="email" placeholder="EMAIL" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} style={errors.email ? {borderBottom:'1px solid red'}: {}} />
                    {errors.email && <span className="error-message">Sorry, invalid format here</span> }
                    <textarea name="Message" id="messageArea" cols="20" rows="5" placeholder={props.message }></textarea>   

                    <button type="submit">SEND MESSAGE</button>       
                </form>
            </div>

            <div className="bottom-navbar">
                <div className="logo">
                    <span>MesganaGeletu</span>
                </div>

                <div className="contact-list">

                    <a href="#"><img className="logo-icon" src={githubLogo} alt="github logo" 
                        onMouseOver={e => e.currentTarget.src = githubLogoHover}
                        onMouseOut={e => e.currentTarget.src = githubLogo}
                    /></a>
                    <a href="#"><img className="logo-icon" src={linkedinLogo} alt="linkedin logo" 
                        onMouseOver={e => e.currentTarget.src = linkedinLogoHover}
                        onMouseOut={e => e.currentTarget.src = linkedinLogo}
                    /></a>
                    <a href="#"><img className="logo-icon" src={frontendMentorLogo} alt="twitter logo" 
                        onMouseOver={e => e.currentTarget.src = frontendMentorLogoHover}
                        onMouseOut={e => e.currentTarget.src = frontendMentorLogo}
                    /></a>

                </div>
            </div>
        </div>

    )
}

export default Footer;