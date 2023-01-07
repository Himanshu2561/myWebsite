import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import Work from './components/Work'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Work/>
      <hr />
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App