import './projectCard.css'

function ProjectCards(props) {


    return (
        <div className="project-card">
            <div className="project-image-container">
                <img id="project-image" className="project-image" src={props.image} alt="project image" />
                <div className={"project-preview-container"}>
                    <div className="project-preview">
                        <span className="highlight"><a href={props.previewLink}>View Project</a></span>
                        <span className="highlight"> <a href={props.sourceCode}>View Code</a></span>
                    </div>
                </div>
            </div>

            <div className="project-text-container">
                <span className="project-name">{props.name}</span>
                <p className="project-description">{props.description}</p>
            </div>

            <div className="bottom-project-buttons">
                <span className="highlight"><a href={props.previewLink}>View Project</a></span>
                <span className="highlight"><a href={props.sourceCode}>View Code</a></span>
            </div>
        </div>
    )
}

export default ProjectCards;