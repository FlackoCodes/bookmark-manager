import { useState } from 'react'
import tabOne from '../images/illustration-features-tab-1.svg'
import tabTwo from '../images/illustration-features-tab-2.svg'
import tabThree from '../images/illustration-features-tab-3.svg'

const Features = () => {

    let headerOne = "Bookmark in one click"
    let para = "Organize your bookmarks however you like. \n \
     Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";

    let headerTwo = "Intelligent search";
    let paraTwo = "Our powerful search feature will help you find saved sites in no time at all.\n \
     No need to trawl through all of your bookmarks.";

    let headerThree = "Share your bookmarks";
    let paraThree = "Easily share your bookmarks and collections with others. \n \
    Create a shareable link that you can send at the click of a button.";

    const [ header, setHeader ] = useState(headerOne)
    const [ paragraph, setParagraph ] = useState(para)
    const [ image, setimage ] = useState(tabOne)

    const simpleBookmark = () =>{
        setHeader(headerOne)
        setParagraph(para)
        setimage(tabOne)
    }

    const speedySharing = ()=>{
        setHeader(headerTwo)
        setParagraph(paraTwo)
        setimage(tabTwo)
    }

    const easySharing = ()=>{
        setHeader(headerThree);
        setParagraph(paraThree)
        setimage(tabThree)
    }

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
                <h3 onClick={simpleBookmark}
                >Simple Bookmarking</h3>
                <hr />
                <h3 onClick={speedySharing}
                >Speedy Searching</h3>
                <hr />
                <h3 onClick={easySharing}
                >Easy Sharing</h3>
                <hr />
        </div>
        <div className="about-features">
            <div>
                <img className='tab-img' src={image} alt="illustration-tab-one" />
            </div>
            <div className='simple-bookmark'>
                <h4>{header}</h4>
                <p>{paragraph}
                </p>
                <button className="simple-btn">More Info</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default Features