const Projects = (props) => {
    const projectCompents = props.projects.map(function (project) {
        return (<>
            <div>
                <h3>{project.title}</h3>
            </div>
            <div>
                <img src='' alt=''></img>
            </div>
            <div>
                <p>
                    {project.disc}
                </p>
            </div>
            <div>
                <a href={project.repo}>Repo</a>
            </div>
            <div>
                <a href={project.live}>Live Site</a>
            </div>
        </>

        )
    })
    return (
        <section>
            {projectCompents}
        </section>
    )
}

export default Projects;