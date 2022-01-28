

const Projects = (props) => {
    const projectCompents = props.projects.map(function (project) {
        return (
            <div key={project.id} className="flex flex-col">

                <h3 key={project.title}>{project.title}</h3>

                <img key={project.img} src={project.img} alt=''></img>

                <p key={project.disc}>
                    {project.disc}
                </p>

                <a key={project.repo} href={project.repo}>Repo</a>

                <a key={project.live} href={project.live}>Live Site</a>

            </div>

        )
    })
    return (
        <section>
            {projectCompents}
        </section>
    )
}

export default Projects;