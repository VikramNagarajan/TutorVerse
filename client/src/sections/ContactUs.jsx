const ContactUs = () => {
  return (
  <div id="contact-us">
      <section className="bg-dark text-white">
  <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
      <h2 className="text-5xl font-semibold text-white text-center font-mono">Contact Us</h2>
      <form action="" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-2xl font-medium text-gray-300">Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-2xl font-medium text-gray-300">Name</label>
              <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-2xl font-medium text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-2xl font-medium text-gray-300">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 btn btn-accent text-black hover:scale-x-125 hover:scale-y-125 font-mono text-lg">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default ContactUs
