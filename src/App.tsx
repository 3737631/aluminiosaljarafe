import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Comments from './components/Comments'
import Process from './components/Process'
import Benefits from './components/Benefits'
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
      <Comments />
      <Process />
      <Benefits />
      <Gallery />
      <FAQ />
      <Contact />
      <MapSection />
      <Footer />
    </div>
  )
}
