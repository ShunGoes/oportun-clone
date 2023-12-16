
import './App.css'
import Friend from './component/Friend/friend'
import Hero from './component/hero/hero'
import Navbar from './component/navbar/navbar'
import Solution from './component/solution/solution'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Friend />
      <Solution />
    </div>
      )
}

export default App
