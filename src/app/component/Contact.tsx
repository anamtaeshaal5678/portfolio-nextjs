import React from 'react'

const Contact = () => {
  return (
    <div id="Contact">
        <section className="text-black bg-cyan-300 body-font relative">
  <div className="container px-6 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-2 bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28935.78279657821!2d67.
!3d24.967038357824684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34768edbc65f3%3A0x4b7731f3d8403fd1
!2sQuetta%20Town%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5
e0!3m2!1sen!2s!4v1730134448364!5m2!1sen!2s" 
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-8 rounded shadow-md">
        <div className="lg:w-2/6 px-3">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
         </h2>
          
        </div>
        <div className="lg:w-2/3 px-6 mt-6 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">M@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">0302xxx</p>
        </div>
      </div>
    </div>
         <div className="lg:w-1/3 md:w-1/2 bg-cyan-300 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
         <h2 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-black'>
      
         Contact
      </h2>
Feel Free Contact
      <p className="leading-relaxed mb-5 text-black w-1 h-3">
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-cyan-300 rounded border border-black focus:border-blue-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm bg-cyan-300 text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-cyan-300 rounded border border-black focus:border-blue-700 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-cyan-300 rounded border border-black focus:border-blue-700 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <a href='#Contact'>
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
        Send Message
     <p className="text-xs text-gray-500 mt-3"></p>
      </button>
      </a>
    
    </div>
  </div>
</section>
</div>
    
  )
}

export default Contact;