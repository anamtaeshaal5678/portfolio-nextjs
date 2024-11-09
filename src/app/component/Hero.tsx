"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (

    <section className="text-gray-900 body-font bg-cyan-300 flex">
      <div className="container mx-auto flex px-5 py-24 justify-center flex-col items-center">
        <div className="lg:flex-grow ml:w-1/2 lg:pr-24 md:pr-16 flex flex-col
          md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black-950">
            I  AM
            <br className="hidden lg:inline-block" />
            Web Developer Ui/Ux Designer
          </h1>
          <div className="w-[350x] h-[4px] bg-gray-950"></div>
          <p className="mb-8 leading-relaxed">
            I&apos;m a passionate web develpor with a strong foundation in  creating responsive,user-friendly websites and applications
          </p>
          <div className="flex justify-center">
            <link href="#Contact"/>
            <button className="inline-flex text-white bg-black hoveer: bg- border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact
            </button>
            
          </div>
        </div>
    </div>
    <div>
    <Image
            className="object-cover object-center rounded mx-auto w-[20rem]"
            src="/profile.jpg"
            alt="image.png.png"
            width={500}
            height={500}
          />
          </div>
    </section>


  )
}

export default Hero