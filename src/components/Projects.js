

const Projects = (props) => {
    const projectCompents = props.projects.map(function (project) {
        return (
            <div key={project.id} className=" card flex flex-col w-[450px] h-[450px] my-12  mx-2 border-4 border-[#4D0823] rounded-md relative">

                <div className="  flex justify-center items-center overflow-hidden w-[450px] h-[450px] ">
                    <img key={project.img} src={project.img} alt='' className=" projectImg block"></img>
                </div>
                <div className=" projectInfo flex flex-col justify-center items-center ">
                    <div>
                        <h3 className="text-xl" key={project.title}>{project.title}</h3>
                    </div>
                    <div>
                        <p key={project.disc} className="text-left">
                            {project.disc}
                        </p>
                    </div>
                    <div>
                        <a key={project.repo} href={project.repo}>Repo</a>
                        <a key={project.live} href={project.live}>Live Site</a>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <section className="flex flex-row flex-wrap justify-center items-center my-6 bg-[#e5e5e5]">
            {projectCompents}
        </section>
    )
}

export default Projects;