import eric from "../assets/images/EricChen.jpg";
import vikram from "../assets/images/VikramNagarajan.jpg"

const About = () => {
  return (
    <div id="about-us" className="flex flex-col items-center font-rubik w-full justify-center py-12">
      <section  className="justify-center">
        <div className="text-4xl font-semibold">
            About Us
        </div>
        <br></br>
      </section>
      <div className="collapse collapse-arrow w-1/2">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium text-center">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p className="text-center">hello</p>
  </div>
</div>
<br></br>
<div className="collapse collapse-arrow w-1/2">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium text-center">
    What We Do
  </div>
  <div className="collapse-content "> 
    <p className="text-center">hello</p>
  </div>
</div>
<br></br>
<div className="collapse collapse-arrow w-1/2">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium text-center">
    Our Mission
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
    </div>        
  )
}

export default About