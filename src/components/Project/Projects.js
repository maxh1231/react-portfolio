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