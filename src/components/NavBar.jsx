import { FaFacebook, FaTwitter } from "react-icons/fa"

import logo from "../images/logo-bookmark.svg"
import hamburger from "../images/icon-hamburger.svg"


const NavBar = () => {
  
  return (
    <>
    <div className="container">
        <header>
            <nav>
                <div className='nav-list-desktop'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                            <li className='login'>Login</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mobile-menu">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <div>
                        <img
                         src={hamburger} 
                         alt="hamburger-menu" />
                    </div>
                </div>
            </div>
        </header>
        <div className= "nav-list-mobile">
            <ul>
              <hr />
                <li>Features</li>
                <hr />
                <li>Pricing</li>
                <hr />
                <li>Contact</li>
                <hr />
                <li className='login'>Login</li>
            </ul>
        </div>
        <div
        style={styles}
        className="icons">
        < FaFacebook color="white" style={{ marginRight: '10px' }}/>
        <FaTwitter color="white" />
    </div>
    </div>
   
  </>
  )
}


export default NavBar

const styles = {
  textAlign: 'center',
  padding: '1rem 0'
}