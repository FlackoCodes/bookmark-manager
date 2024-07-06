import { useState } from "react"
import { FaFacebook, FaTwitter } from "react-icons/fa"

import logo from "../images/logo-bookmark.svg"
import hamburger from "../images/icon-hamburger.svg"
import iconClose from "../images/icon-close.svg"


const NavBar = () => {

  const [ isOpen, setIsOpen ] = useState(true)
  
  const toggleNav = () =>{
    setIsOpen(!isOpen)
  }

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
            <div className="mobile-menu" style={{zIndex: '2', position: 'relative'}}>
                <div>
                    <img className={isOpen ? "logo-m" : "logo-m fitler-logo"} src={logo} alt="logo" />
                </div>
                <div>
                    <div>
                        <img
                        onClick={toggleNav}
                         src={ isOpen ? hamburger : iconClose } 
                         alt="hamburger-menu" />
                    </div>
                </div>
            </div>
        </header>
      <div className= { isOpen ? "nav-list-mobile" : "nav-list-mobile overlay"}>
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
            <div
        style={styles}
        className="icons">
        < FaFacebook color="white" style={{ marginRight: '10px' }}/>
        <FaTwitter color="white" />
    </div>
        </div>
       
    </div>
   
  </>
  )
}


export default NavBar

const styles = {
  textAlign: 'center',
  padding: '1rem 0',
  marginTop: '50px'
}