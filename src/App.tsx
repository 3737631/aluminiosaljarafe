import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Benefits />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <MapSection />
      <Footer />
    </div>
  )
}
