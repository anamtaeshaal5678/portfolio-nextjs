import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
const About = () => {
  return (
    <div id='About'>
      <section className="text-black body-font">
    <div className="container mx-auto flex  bg-cyan-300 px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt='hero'
          src="/profile.jpg"
          width={100}
          height={100}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-bg-grey-900">
          About Me
          <br className="hidden lg:inline-block" />
        Completed My Greaducation
        </h1>
        <p className="mb-5 leading-relaxed">
          "Creative Responcive & User-Friendly Web Experiance"
        </p>
        <div className="flex justify-center">
          <Link href=''>
          <button className="inline-flex text-white bg-black
           border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
            View CV
          </button> 
        </Link>
        </div>
      </div>
    </div>
  </section>
  

      </div>
  )
}
export default About