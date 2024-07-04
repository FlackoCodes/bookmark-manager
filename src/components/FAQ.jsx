import { useState } from "react"
import accordion from "../accordion.json"
import {  FaChevronDown , FaChevronUp } from "react-icons/fa"


const FAQ = () => {
    const [ isToggled, setIsToggled ] = useState(true)

    const toggleAcoordion = ()=>{
        setIsToggled(!isToggled)
    }
 
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
                accordion.map(data =>(
                    <div key={data.id}>
                        <hr />
                        <div style={{cursor: 'pointer'}}
                        onClick={toggleAcoordion}
                        className="question">
                            <h6 className="quest"
                            >{data.question}</h6>
                            {
                                isToggled ? <FaChevronDown color="blue" /> : <FaChevronUp color="hsl(0, 94%, 66%)" />
                            }
                            
                        </div>
                        <p className={isToggled ? "answer" : "answer reveal-answer"}>
                            {data.answer}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default FAQ