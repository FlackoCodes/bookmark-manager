import tabOne from '../images/illustration-features-tab-1.svg'


const Features = () => {
  return (
    <>
     <div className="features">
        <header>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.</p>
        </header>
        <div className="main-features">
                 <hr />
                <h3>Simple Bookmarking</h3>
                <hr />
                <h3>Speedy Searching</h3>
                <hr />
                <h3>Easy Sharing</h3>
                <hr />
        </div>
        <div className="about-features">
            <div>
                <img className='tab-img' src={tabOne} alt="illustration-tab-one" />
            </div>
            <div className='simple-bookmark'>
                <h4>Bookmark in one click</h4>
                <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.
                </p>
                <button className="simple-btn">More Info</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default Features