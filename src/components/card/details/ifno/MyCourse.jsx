

const MyCourse = ({course}) => {

    const {course_title} = course;


    return (

        <div className="bg-slate-300 mt-1 p-3">                 
                <h2 className="text-sm">{course_title}</h2>    
        </div>
    );
};

export default MyCourse;