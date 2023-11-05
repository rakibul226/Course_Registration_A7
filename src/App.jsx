
import { useState } from 'react'
import './App.css'
import Cards from './components/card/cards'
import Bookmarks from './components/card/details/bookmarks'

function App() {

  const [totalCrTime,setCrTime] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  const [myCourse,setMyCourse] = useState([]);
  const [remaining,setRemaining] = useState(20);


  const handleClickedCard = (card) =>{

    if((remaining-card.credit)>= 0){

              // let exist = myCourse.filter((check) => check.id !== card.id)
              // if(exist){}

              // if(myCourse.find((check) => check.id !== card.id)){
              //       setMyCourse([...myCourse, card]);
              //             setRemaining(remaining-card.credit)
              //             setCrTime(totalCrTime + card.credit);              
              //             setTotalPrice(totalPrice + card.price)
              // }

              // if(!(myCourse.filter((check) => check.id !== card.id))){
              //       setMyCourse([...myCourse, card]);
              //             setRemaining(remaining-card.credit)
              //             setCrTime(totalCrTime + card.credit);              
              //             setTotalPrice(totalPrice + card.price)
              // }
            

                if (!(myCourse.some((item) => item.id === card.id))) {

                  setMyCourse([...myCourse, card]);
                  setRemaining(remaining-card.credit)
                  setCrTime(totalCrTime + card.credit);              
                  setTotalPrice(totalPrice + card.price)
                }
 

     } 
    else if(remaining == 0){
      alert('Maximum credit limit reached')
     }  
  }

  return (
    <div>
      <div className='text-center mt-5 '>
        <h1 className='text-4xl'>Course Registration</h1>
      </div>
      <div className='md:flex max-w-7xl mx-auto gap-3 my-9'> 
          <div>
            <Cards handleClickedCard={handleClickedCard}></Cards> 
          </div>
          <div>
              <Bookmarks remaining={remaining} myCourse={myCourse} totalCrTime={totalCrTime} totalPrice={totalPrice}></Bookmarks>
          </div>
      </div> 
      
    </div>
  )
}

export default App
