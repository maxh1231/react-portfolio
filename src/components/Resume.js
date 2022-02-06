import photo from '../resume.PNG';

const Resume = () => {
    return (
        <section>
            <div>
                <img src={photo} alt=""></img>
            </div>
            <div>

                <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit?usp=sharing">
                    <button>
                        View Resume
                    </button>
                </a>

            </div>
        </section>
    )
}

export default Resume;