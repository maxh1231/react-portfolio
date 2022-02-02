

const Projects = (props) => {
    const projectCompents = props.projects.map(function (project) {
        return (
            <div key={project.id} className=" card flex flex-col w-[450px] h-[450px] my-12  mx-2 border-4 border-[#4D0823] rounded-md relative shadow-xl basis-1/4">

                <div className="  flex justify-center items-center overflow-hidden w-[450px] h-[450px] ">
                    <img key={project.img} src={project.img} alt='' className=" projectImg block"></img>
                </div>
                <div className=" projectInfo flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-2xl font-semibold" key={project.title}>{project.title}</h3>
                    </div>
                    <div>
                        <p key={project.disc} className="text-xl">
                            {project.disc}
                        </p>
                    </div>
                    <div className="flex justify-evenly">
                        <a className="text-xl text-[#00b4d8] hover:underline" key={project.repo} href={project.repo}>Repo</a>
                        <a className="text-xl text-[#00b4d8] hover:underline" key={project.live} href={project.live}>Live Site</a>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <section className="flex flex-row flex-wrap justify-center items-center mt-6 bg-[#e5e5e5]">
            {projectCompents}
        </section>
    )
}

export default Projects;