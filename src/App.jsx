import { About, Footer, Hero, Services, Tutors, Subscribe, ContactUs } from './sections';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => (
  <main className="relative">
    <section> 
        <Nav/>
          <Routes>
          <Route path="/home" element={Hero}/>
          <Route path="/services" element={Services}/>
          <Route path="/about-us" element={About}/>
          <Route path="/contact-us" element={ContactUs}/>
          </Routes>  
    </section>
    <section className="x1:padding-1 wide:padding-r pt-28">
      <Hero/>
    </section>
    <section>
      <Services />
    </section>
    <section>
      <About/>  
    </section>
    <section className="padding-x">
      <Tutors/>
    </section>
    <section className="padding">
      <ContactUs/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x ">
      <Footer/>
    </section>
  </main>
)

export default App; 