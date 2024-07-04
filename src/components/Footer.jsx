import { FaFacebook, FaTwitter } from "react-icons/fa"
import logo from '../images/logo-bookmark.svg'

const Footer = () => {
  return (
    <>
    <div className="contact">
        <div className="contact-us">
            <h6>35,000+ already joined</h6>
            <p>Stay up-to-date with what we’re doing</p>
            <form action="">
                <input type="text" placeholder="Enter your email address" />
                <button className="contact-btn">Contact us</button>
            </form>
        </div>
    </div>
    <footer>
        <div className="footer">
            <ul>
                <li>
                    <img className="footer-logo" src={logo} alt="bookmark logo" />
                </li>
                <li>Features</li>
                <li>Pricing</li>
                <li style={{marginBottom: '15px'}}>Contact</li>
            </ul>
            <div className="socials">
                <FaFacebook color="white" style={{marginRight: '15px'}} />
                <FaTwitter color="white" />
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer