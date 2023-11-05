import TotalPrice from "./TotalPrice";
import MyCourse from "./ifno/MyCourse";
import TotalCrTime from "./ifno/TotalCrTime";
import PropTypes from 'prop-types';



const Bookmarks = ({totalCrTime,totalPrice,myCourse,remaining}) => {
    // const {} =clickedCard;
    return (
        <div className="mx-3 lg:mx-0">
            <div className="mt-5 text-lg font-bold text-blue-500">
                <h2>Credit Hour Remaining:{remaining}</h2>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2 mt-4">Course Name</h2>
                {
                      myCourse.map((course,idx) => <MyCourse key={idx} course={course} idx={idx}></MyCourse>)
                 }
            </div>
                <hr />
            <TotalCrTime totalCrTime={totalCrTime}></TotalCrTime>
                <hr />
            <TotalPrice totalPrice={totalPrice}></TotalPrice>
        </div>
    );
};

Bookmarks.propTypes = {
    totalCrTime: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    myCourse: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired
  };

export default Bookmarks;


// {
//     myCourse.map((course,idx) => <MyCourse key={idx} myCourse={myCourse}></MyCourse>)
// }