
import { useState } from 'react'
import './App.css'
import Cards from './components/card/cards'
import Bookmarks from './components/card/details/bookmarks'

function App() {

  const [totalCrTime,setCrTime] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  const [myCourse,setMyCourse] = useState([]);
  const [remaining,setRemaining] = useState(20)

  // const handleRemaining = () =>{
  //   setRemaining(remaining - totalCrTime)
  // }


  const handleClickedCard = (card) =>{
    setCrTime(totalCrTime + card.credit);

    setTotalPrice(totalPrice + card.price)

    const newCourse = [...myCourse,card];
    setMyCourse(newCourse);
    // handleRemaining()

    setRemaining(remaining-card.credit)
  }

  return (
    <div className=''>
      <div className='text-center py-8 '>
        <h1 className='text-4xl'>Course Registration</h1>
      </div>
      <div className='md:flex max-w-7xl mx-auto gap-3'>
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
