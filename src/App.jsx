import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Customer from './components/Customer/Customer'
import FooterBlock from './components/FooterBlock/FooterBlock'
import FooterBar from './components/FooterBar/FooterBar'
import Project from './components/Project/Project'
import VantaBackground from './components/VantaBackground/VantaBackground'
import Career from './components/Career/Career'

function App() {
  return (
    <div className="relative min-h-screen">
      <VantaBackground />

      <div className="relative z-10">
          <Navbar />
          <Hero />
          <Card />
          <Customer />
          <Project />
          <Career />
          <FooterBlock />
          <FooterBar />
          
<p className="font-[UnitedSans] font-light text-amber-200 text-lg">
  United Sans Light (300) – Acesta este un text cu greutate light.
</p>

<p className="font-[UnitedSans] font-medium text-amber-200 text-lg">
  United Sans Medium (500) – Acesta este un text cu greutate medie.
</p>

<p className="font-[UnitedSans] font-bold text-amber-200 text-lg">
  United Sans Bold (700) – Acesta este un text cu greutate bold.
</p>

<p className="font-[UnitedSans] font-extrabold text-amber-200 text-lg">
  United Sans Heavy (800) – Acesta este un text cu greutate heavy.
</p>

<p className="font-[UnitedSans] font-black text-amber-200 text-lg">
  United Sans Black (900) – Acesta este un text cu greutate black.
</p>
      </div>

  </div>
  )
}

export default App
