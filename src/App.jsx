
import './App.css'
import Calculator from './component/calculator/calculator'
import Hero from './component/hero/hero'
import Navbar from './component/navbar/navbar'
import Section from './component/section-4/section'
import Solution from './component/solution/solution'
import Columns from './component/columns/columns'
import Savvy from './component/savvy/savvy'
import Journey from './component/journey/journey'
import Sums from './component/sums/sums'


import Section2 from './component/section2/section2'

function App() {

  

  return ( 
    <div className='relative text-black'>
      <Navbar />
      <Hero />
      <Section2 />
      <Solution />
      <Calculator />
      <Section />
      <Columns />
      <Savvy />
       <Journey /> 
       <Sums />
    </div>
      )
}

export default App
