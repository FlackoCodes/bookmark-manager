import chromeLogo from '../images/logo-chrome.svg'
import firefoxLogo from '../images/logo-firefox.svg'
import operaLogo from '../images/logo-opera.svg'
import bgDots from '../images/bg-dots.svg'

const Extensions = () => {

  return (
    <>
    <div className="download">
        <header>
            <h5>Download the extension</h5>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
        </header>
        <div className="browser-links">
          <div className="cards card-1">
            <img src={chromeLogo} alt="chrome logo" />
            <h6>Add to Chrome</h6>
            <p>Minimum version 62</p>
            <img src={bgDots} alt="background dots" />
            <button className="install">Add & Install Extension</button>
          </div>
          <div className="cards card-2">
          <img src={firefoxLogo} alt="firefox logo" />
            <h6>Add to FireFox</h6>
            <p>Minimum version 65</p>
            <img src={bgDots} alt="background dots" />
            <button className="install">Add & Install Extension</button>
          </div>
          <div className="cards card-3">
          <img src={operaLogo} alt="opera logo" />
            <h6>Add to Opera</h6>
            <p>Minimum version 46</p>
            <img src={bgDots} alt="background dots" />
            <button className="install">Add & Install Extension</button>
          </div>
        </div>
    </div>
    </>
  )
}
 
export default Extensions