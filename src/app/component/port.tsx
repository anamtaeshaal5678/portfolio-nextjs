import Link from "next/link";
import React from "react";
const Portfolio = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <header className="text- bg-cyan-300 body-font">
                <div className="container mx-auto flex  flex-wrap p-5 flex-col md:flex-rows items-center">

                    <Link  href="" className="flex title-font font-bold  items-center mb-2 md:mb-0">


                        <span className="ml-3 text-xl">Portfolio</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        < Link href="#" className="mr-5 hover:text-blue-700">
                            Home
                        </Link>
                        < Link href="#About" className="mr-5 hover:text-blue-700">
                            About
                        </Link>
                        < Link href="#" className="mr-5 hover:text-blue-700">
                            Skills
                        </Link>
                        <Link href="#Contact" className="mr-5 hover:text-blue-700">
                            Contact
                        </Link>
                    </nav>

                    <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        <Link href='/'>
                            Download CV
                    
                        </Link>
                    </button>
                </div>
            </header>

        </div>
    );
};
export default Portfolio;
