import photo from '../resume.PNG';

const Resume = () => {
    return (
        <section className=' h-full bg-[#e5e5e5] flex flex-col items-center pt-2'>
            <div>
                <img src={photo} alt=""></img>
            </div>
            <div className='mt-2'>

                <a href="https://docs.google.com/document/d/1S9RU3scZyjFcD91g1vVpjavVcvp9GqvFuitpEzQ5CCA/edit?usp=sharing">
                    <button className='btn py-2 px-6 bg-[#FFF]'>
                        View Resume
                    </button>
                </a>

            </div>
        </section>
    )
}

export default Resume;