import Avatar from 'avataaars'

import photo from '../me-400x600.jpg'

const About = () => {
    return (
        <section className='flex flex-row justify-center w-full h-4/5 bg-[#e5e5e5]'>
            <div className="ml-12 w-1/4 flex flex-col justify-center">
                <div>
                    <h3 className="text-5xl text-left">Hi, I'm Max</h3>
                </div>
                <div>
                    <p className="text-left text-lg">
                        Full Stack web developer with a passion to code and learning new technologies. Proficiency in the MERN stack and always pursuing a deeper knowledge of all-things programming. View my projects to see my ability to develop well-functioning, clean user-interfaces and applications.
                    </p>
                </div>
            </div>
            <div className="mr-12 w-1/4 flex justify-center items-center">
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
                />
            </div>
        </section>
    )
}

export default About;