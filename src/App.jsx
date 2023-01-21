import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import About from './components/About'
import Hero from './components/Hero'
import Work from './components/Work'
import './App.css'

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