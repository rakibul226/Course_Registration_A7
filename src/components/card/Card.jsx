

const Card = ({card}) => {
    const {cover_img,course_title,course_description} = card;
    return (
        <div className="mt-10 bg-slate-200 p-3 rounded-md">
            <img className="h-36 w-72 border rounded-xl" src={cover_img} alt="" />
            <h1 className="pt-2 font-semibold">{course_title}</h1>
            <p className="font-thin w-72 ">{course_description}</p>
        </div>
    );
};

export default Card;