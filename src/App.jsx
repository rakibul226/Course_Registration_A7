
import { useState } from 'react'
import './App.css'
import Cards from './components/card/cards'
import Bookmarks from './components/card/details/bookmarks'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [totalCrTime,setCrTime] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  const [myCourse,setMyCourse] = useState([]);
  const [remaining,setRemaining] = useState(20);


  const handleClickedCard = (card) =>{

    if((remaining-card.credit)>= 0){
        if (!(myCourse.some((item) => item.id === card.id))) {

          setMyCourse([...myCourse, card]);
          setRemaining(remaining-card.credit)
          setCrTime(totalCrTime + card.credit);              
          setTotalPrice(totalPrice + card.price)
        }
        else{
          toast('you have already select this course')
        }
     } 
    else if(remaining == 0){
      toast('Maximum credit limit reached')
     }
    else if(remaining == 1){
      toast('You have already selected maximum courses in credit limit')
     }
    else if(remaining >= 1){
      toast('You can select a 2 credit only')
     }
  }

  return (
    <div>
      <div className='text-center mt-5 '>
        <h1 className='text-4xl'>Course Registration</h1>
      </div>
      <div className='lg:flex max-w-7xl mx-auto gap-3 my-9'> 
          <div>
            <Cards handleClickedCard={handleClickedCard}></Cards> 
          </div>
          <div>
              <Bookmarks remaining={remaining} myCourse={myCourse} totalCrTime={totalCrTime} totalPrice={totalPrice}></Bookmarks>
          </div>
      </div> 
      
      <ToastContainer />
    </div>
  )
}

export default App
