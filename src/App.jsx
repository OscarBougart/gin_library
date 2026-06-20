import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SignatureCocktails from './components/sections/SignatureCocktails'
import Events from './components/sections/Events'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureCocktails />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
