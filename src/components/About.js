// eslint-disable

import Avatar from 'avataaars'

const About = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center items-center w-full h-4/5 bg-[#e5e5e5]'>
            <div className="p-6 lg:p-0 lg:w-1/4 flex flex-col justify-center">
                <div>
                    <h3 className="text-5xl text-center">Hi, I'm Max</h3>
                </div>
                <div>
                    <p className="text-left text-base md:text-lg">
                        Full Stack web developer with a passion to code and learning new technologies. Proficiency in the MERN stack and always pursuing a deeper knowledge of all-things programming. View my projects to see my ability to develop well-functioning, clean user-interfaces and applications.
                    </p>
                </div>
            </div>
            <div className=" w-1/2 lg:w-1/4 flex justify-center items-center">
                <Avatar
                    avatarStyle='Circle'
                    topType='ShortHairShortFlat'
                    accessoriesType='Prescription02'
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType='BlazerShirt'
                    eyeType='Happy'
                    eyebrowType='Default'
                    mouthType='Default'
                    skinColor='Light'
                /> {/* eslint-disable-line react-hooks/exhaustive-deps */}

            </div>
        </section>
    )
}

export default About;