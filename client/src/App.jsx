import { About, Footer, Hero, Services, ContactUs } from './sections';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => (
  <main className="relative bg-dark">
    <section>
        <Nav />
          <Routes>
          <Route path="/home" element={Hero}/>
          <Route path="/services" element={Services}/>
          <Route path="/about-us" element={About}/>
          <Route path="/contact-us" element={ContactUs}/>
          </Routes>  
    </section>
    <section>
      <Hero/>
    </section>
    <section>
      <Services />
    </section>
    <section>
      <About/>  
    </section>
    <section>
      <ContactUs/>
    </section>
    <section>
      <Footer/>
    </section>
  </main>
)

export default App; 