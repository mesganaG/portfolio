import './experienceCard.css'


function ExperienceCard(props) {
    return (
        <div className="experience-item">
        <span>{props.language}</span>
        <p>{props.years} Years Experience</p>
        </div>
    )
}

export default ExperienceCard