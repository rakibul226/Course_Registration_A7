import PropTypes from 'prop-types';


const MyCourse = ({course,idx}) => {

    const {course_title} = course;



    return (

        <div className="bg-slate-400 mt-1 p-3 text-white">                 
                <h2 className="text-sm">{idx + 1}. {course_title}</h2>    
        </div>
    );
};
MyCourse.propTypes = {
    course: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
  };
export default MyCourse;