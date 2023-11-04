import { MdOutlineAttachMoney } from 'react-icons/md';
import { SlBookOpen } from 'react-icons/sl';

const Card = ({card}) => {
    const {cover_img,course_title,course_description,price,credit} = card;
    return (
        <div className="mt-5 bg-slate-200 p-3 rounded-md">
            <img className="h-36 w-72 border rounded-xl" src={cover_img} alt="" />
            <h1 className="pt-2 font-semibold">{course_title}</h1>
            <p className="font-thin pt-1 w-72 ">{course_description}</p>
                <div className='flex justify-around pt-4'>
                    <div className='flex gap-1'>
                        <span className='text-xl'><MdOutlineAttachMoney></MdOutlineAttachMoney></span>
                        <span>Price:{price}</span>
                    </div>
                    <div className='flex gap-1'>
                        <span className='pt-1'><SlBookOpen></SlBookOpen></span>
                        <span>Credit: {credit}hr</span>
                    </div>

                </div>
            <button className="bg-blue-600 text-white w-full rounded-md h-8 mt-5">Select</button>
        </div>
    );
};

export default Card;