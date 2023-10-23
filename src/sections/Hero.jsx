import community from "../assets/images/community.png";
const Hero = () => {
  return ( 
    //w-full flex justify-center min-h-screen gap-10 max-container p-2
    <div id="home" className="flex flex-col items-center font-rubik w-full pt-12 justify-center text-center">
      <section className="p-2">
        <div className="text-6xl font-semibold text-white">
          Reshaping Education
        </div>
      </section>  
      <div className="text-lg">
        <p className="py-6 pt-8">
          <button className="btn btn-accent hover:scale-x-125 
           hover:scale-y-125 text-lg text-black">
           With a click of a button
           </button>
        </p>
        <p className="py-6">
          Discover a world of creative collaboration
          where like-minded learners
        </p>
        <p>
          come together to revolutionize the way we study and learn.
        </p>
      </div>
      <p className="pt-6">
        <img src={community} alt="Logo" height={500} width={500} className="p-3"/>
      </p>
    </div>
  )
}

export default Hero