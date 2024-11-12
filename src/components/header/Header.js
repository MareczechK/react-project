import { FaIcons } from "react-icons/fa6";
import "./Header.css"
import dataHeader from "../../dataText/dataHeader.js"

const Header = () => {
    const randomIndex = Math.floor(Math.random() * dataHeader.length);

    return (
        <div className="header-container">
            <div className="fa-icons">
                <FaIcons className="icon" />
            </div>
            <div className="title-section">
                <h1 className="main-title">Classic movies</h1>
            </div>
            <div className="text-container">
                {
                    dataHeader.map((text, index) => {
                        return (
                            <h2
                                key={index}
                                style={{ color: index === randomIndex ? 'yellow' : 'black' }}
                            >
                                {text}
                            </h2>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header