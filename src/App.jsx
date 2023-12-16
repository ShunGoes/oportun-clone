
import './App.css'
import Friend from './component/Friend/friend'
import Calculator from './component/calculator/calculator'
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
      <Calculator />
    </div>
      )
}

export default App
