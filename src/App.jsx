
import './App.css'
import Friend from './component/Friend/friend'
import Calculator from './component/calculator/calculator'
import Hero from './component/hero/hero'
import Navbar from './component/navbar/navbar'
import Section from './component/section-4/section'
import Solution from './component/solution/solution'
import Columns from './component/columns/columns'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Friend />
      <Solution />
      <Calculator />
      <Section />
      <Columns />
    </div>
      )
}

export default App
