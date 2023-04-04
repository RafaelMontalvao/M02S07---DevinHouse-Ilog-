import "./CourseCard.css";
import PropTypes from "prop-types";

function CouserCard({imageUrl, name, category, description,duration }){

    return(<div className="courseCardContainer">
        <div className="courseCardHeader">
        {imageUrl && <img src={imageUrl} alt={`imagem curso ${name}`}/>}
        <h3> {name}</h3>
        </div>
        <p>{duration}</p>
        <p>{description}</p>
        </div>
    );
}
CouserCard.prototype ={
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,    
};



export default CouserCard;