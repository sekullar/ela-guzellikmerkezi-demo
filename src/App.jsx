import { useState } from 'react'
import { Nav, Hero, Services, About, Gallery, Booking, Footer } from './components/Sections'
import { services } from './data/site'

export default function App() {
  const [service, setService] = useState(services[0].title)
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services onPick={setService} />
        <About />
        <Gallery />
        <Booking service={service} setService={setService} />
      </main>
      <Footer />
    </>
  )
}
