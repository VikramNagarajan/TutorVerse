import eric from "../assets/images/EricChen.jpg";
import vikram from "../assets/images/VikramNagarajan.jpg"

const About = () => {
  return (
    <div id="about-us" className="flex flex-col items-center font-rubik w-full justify-center pt-28">
      <section  className="justify-center">
        <div className="text-5xl font-semibold text-white">
            About Us
        </div>
      </section>
      <div className="w-1/2 hidden xl:flex pt-5">

        <details className="collapse collapse-arrow bg-darkLess">
          <summary className="collapse-title text-2xl font-medium text-center">What We Do</summary>
          <div className="collapse-content"> 
            <p className="text-center text-xl">
            At TutorVerse, we connect students with qualified tutors, study groups, and study partners. Our platform caters to various learning styles, facilitating both one-on-one tutoring and collaborative learning experiences. Through a user-friendly interface, students can easily align with resources and individuals to meet their academic goals, creating a conducive environment for academic growth and success.
            </p>
          </div>
        </details>
      </div>
      
      <div className="w-1/2 hidden xl:flex pt-8">

        <details className="collapse collapse-arrow bg-darkLess">
          <summary className="collapse-title text-2xl font-medium text-center">Our Mission</summary>
          <div className="collapse-content"> 
            <p className="text-center text-xl">
            At TutorVerse, our mission is to simplify and enhance the learning experience by connecting individuals with the right educational resources and communities. We strive to create a platform where students can easily find expert tutors, join study groups, or pair up with study buddies, all tailored to their unique learning needs and goals. Our vision is to foster a collaborative and supportive learning environment that encourages continuous academic growth, knowledge sharing, and the meaningful exchange of ideas. Through TutorVerse, we aim to make education more accessible, engaging, and effective for every learner.
            </p>
          </div>
        </details>
      </div>
   
      <div className="w-1/2 hidden xl:flex pt-8">

        <details className="collapse collapse-arrow bg-darkLess">
          <summary className="collapse-title text-2xl font-medium text-center">Our Story</summary>
          <div className="collapse-content"> 
            <p className="text-center text-xl">
            As college students, we faced hurdles in finding trustworthy tutors and study groups for our classes. The available tutoring platforms were taking a significant cut from the tutors' earnings, making it a less appealing option for many knowledgeable individuals. The absence of a centralized platform for forming study groups further added to our academic challenges. Seeing this gap, we created TutorVerse to connect students with affordable tutoring and collaborative learning opportunities. By reducing the fees for tutors and offering a centralized hub for academic collaboration, TutorVerse stands as a practical solution to the real-world problems we encountered during our educational journey.
            </p>
          </div>
        </details>
      </div>
        <div className="pt-6">
          <div className="card w-96 bg-gray-500 shadow-xl xl:hidden">
            <div className="card-body items-center">
              <h2 className="card-title text-center">For Students. By Students.</h2>
              <br></br>
              <p className="text-center">
              At TutorVerse, we hold steadfast to the belief that education is a collaborative endeavor. We prioritize creating a conducive environment for learning, where students, tutors, and peers can connect and interact seamlessly.
              </p>
              <br></br>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">JOIN FOR FREE!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About