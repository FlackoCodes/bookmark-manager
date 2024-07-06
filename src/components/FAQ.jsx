import { useState } from "react"
import accordion from "../accordion.json"
import {  FaChevronDown , FaChevronUp } from "react-icons/fa"


const FAQ = () => {
    const [toggledItems, setToggledItems] = useState(
      new Array(accordion.length).fill(true) // creates a new array and fill them with true values
    );
  
    const toggleAccordion = (index) => {
      setToggledItems((prevToggledItems) => // preveToggledItems is the previous sate
        prevToggledItems.map((item, i) => (i === index ? !item : item)) // checks if the current index is the clicked index
      );
    };
 
  return (
    <>
    <div className="accordion">
        <div className="title">
            <h6>Frequently Asked Questions</h6>
            <p>Here are some of our FAQs. If you have any other questions you’d like 
            answered please feel free to email us.</p>
        </div>
        <div className="accordion-container">
            {
                accordion.map((data, i) =>(
                    <div key={data.id}>
                        <hr />
                        <div style={{cursor: 'pointer'}}
                        onClick={()=>toggleAccordion(i)}
                        className="question">
                            <h6 className="quest"
                            >{data.question}</h6>
                            { 
                                toggledItems[i] ? <FaChevronDown color="blue" /> : <FaChevronUp color="hsl(0, 94%, 66%)" />
                            }
                        </div>
                        <p className={toggledItems[i] ? "answer" : "answer reveal-answer"}>
                            {data.answer}
                        </p>
                    </div>
                ))
            }
        </div>
        <div className="more-info">
            <button className="info-btn">More Info</button>
        </div>
    </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ