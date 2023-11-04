import TotalPrice from "./TotalPrice";
import MyCourse from "./ifno/MyCourse";
import TotalCrTime from "./ifno/TotalCrTime";


const Bookmarks = ({totalCrTime,totalPrice,myCourse,remaining}) => {
    // const {} =clickedCard;
    return (
        <div className="">
            <div className="mt-5 text-xl font-bold">
                <h2>Credit Hour Remaining:{remaining}</h2>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2 mt-4">Course Name</h2>
                {
                      myCourse.map((course,idx) => <MyCourse key={idx} course={course}></MyCourse>)
                 }
            </div>
                <hr />
            <TotalCrTime totalCrTime={totalCrTime}></TotalCrTime>
                <hr />
            <TotalPrice totalPrice={totalPrice}></TotalPrice>
        </div>
    );
};

export default Bookmarks;


// {
//     myCourse.map((course,idx) => <MyCourse key={idx} myCourse={myCourse}></MyCourse>)
// }