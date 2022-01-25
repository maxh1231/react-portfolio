import github from '../../../src/GitHub-Mark-32px.png'
import linkedln from '../../../src/icons8-linkedin-32.png'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={github} alt=""></img>
            </div>
            <div>
                <img src={linkedln} alt="" width="32" height="32px"></img>
            </div>
        </footer>
    )
}

export default Footer;