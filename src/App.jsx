
import './App.css'
import Cards from './components/card/cards'

function App() {


  return (
    <div className=''>
      <div className='text-center py-8 '>
        <h1 className='text-4xl'>Course Registration</h1>
      </div>
      <div className='md:flex max-w-7xl mx-auto gap-3'>
          <div>
            <Cards></Cards>
          </div>
          <div>
            bookmarks
          </div>
      </div> 
      
    </div>
  )
}

export default App
