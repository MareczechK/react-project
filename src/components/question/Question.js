import "./Question.css"
import data from "../../dataText/dataQuestion.json"
import { useState } from "react"
import { Link } from "react-router-dom"

const Question = () => {
    const [show, setShow] = useState(null)
    const handleClick = (id) => {
        const answer = data.find((answer) => answer.id === id)
        setShow(answer)
    }
    return <div className="question-container">
        <div>
            {data.map((answer) => (
                <button key={answer.id} onClick={() => handleClick(answer.id)}>
                    {answer.title}
                </button>
            ))
            }
        </div>
        <div>
            <p>{show ? show.info : "Do you want to know more?"}</p>
        </div>
        <div className="weather"><Link to="/weather">Link to the weather page</Link></div>
    </div >
}

export default Question