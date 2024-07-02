import tabOne from "../images/illustration-features-tab-1.svg"

const CallToAct = () => {
  return (
    <>
    <div className="reverse">
    <div className="tab-one-image">
            <img src={tabOne} alt="tab-one-image" />
        </div>
        <div className="bookmark">
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.</p>
            <div className="buttons">
                <button>Get it on Chrome</button>
                <button>Get it on Firefox</button>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default CallToAct