import github from '../../src/GitHub-Mark-32px.png'
import linkedln from '../../src/icons8-linkedin-32.png'

const Footer = () => {
    return (
        <footer className="bg-[#e5e5e5] flex justify-center">
            <div className="px-1">
                <a href='https://github.com/maxh1231' target="_blank">
                    <img className="footerImage" src={github} alt="">

                    </img>
                </a>
            </div>
            <div className="linkedln px-1">
                <a href='https://www.linkedin.com/in/max-humpherys-040822219/' target="_blank">
                    <img className="footerImage" src={linkedln} alt="">

                    </img>
                </a>
            </div>
        </footer>
    )
}

export default Footer;