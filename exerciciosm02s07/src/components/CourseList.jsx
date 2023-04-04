import CouserCard from "./CourseCard";
import "./CourseList.css"
import PropTypes from "prop-types";

function CourseList({list}){
    return(
        <ul className="courseListContainer">
            {list.map(course => (               
                 <li key={course.id}>
                    <CouserCard
                    imageUrl= {course.imageUrl}  
                    name = {course.name}
                    category= {course.category}
                    description={course.description}
                    duration = {course.duration}
                />
                </li>
            ))}
                
        </ul>
    );
}
CourseList.prototypes = {
    list : PropTypes.arrayOf(
        PropTypes.shape({
            imageUrl: PropTypes.string,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            duration: PropTypes.number.isRequired,                
        })
    )
};

CourseList.defaultProps = {
    list: []
};

export default CourseList;