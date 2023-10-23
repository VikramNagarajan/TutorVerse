const Services = () => {
  return (
    <div id="services" className="flex flex-col font-rubik w-full">
      <div className="text-4xl font-semibold text-center text-white">
        Services
      </div>
      <div className="flex flex-row justify-center pt-12">
        <div className="card card-side bg-green-700 shadow-xl text-xl w-3/12 " style={{ marginRight: '6rem' }}>
          {/* <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure> */}
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">Formulate Study Groups</h2>
            <p> Easily find and join study groups with peers who are in the same class.
              Collaborate, discuss, and review course materials together to enhance your learning experience.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent text-black hover:scale-x-125 hover:scale-y-125">Try for free!</button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-teal-700 shadow-xl text-xl w-3/12">
         {/*  <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure> */}
          <div className="card-body">
            <h2 className="card-title text-2xl text-white">Tutoring Assistance</h2>
            <p> Connect with experienced tutors in your class for one-on-one or group tutoring sessions.
                Get personalized help and support for challenging topics and assignments.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary hover:scale-x-125 hover:scale-y-125">Try for free!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
