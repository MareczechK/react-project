import "./OneIcon.css"
import dataIcons from "../../dataText/dataIcons.json"
import { FaMasksTheater } from "react-icons/fa6"
import image1 from "../../img/image1.jpg"
import image2 from "../../img/image2.jpg"
import image3 from "../../img/image3.jpg"
import image4 from "../../img/image4.jpg"

const images = {
    image1,
    image2,
    image3,
    image4
};

const OneIcon = () => {
    return <div className="icon-container">
        {
            dataIcons.map((oneData) => {
                const { id, image, title, description } = oneData
                return <div className="one-icon" key={id}>
                    <FaMasksTheater className="one-image" />
                    <h1>{title}</h1>
                    <img src={images[image]} alt={title} />
                    <p>{description}</p>
                </div>
            })
        }
    </div>
}

export default OneIcon