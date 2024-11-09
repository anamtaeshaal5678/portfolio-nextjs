import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
    return (
        <div className="bg-blue-50">
            <footer className="text-blue-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image
                            src='/profile.jpg'
                            alt='image.png.png'
                            width={100}
                            height={100}
                        />
                        <span className="ml-3 text-xl">Portfolio</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024- Portfolio

                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                            target='blanck'
                            href={""}
                            className="text-gray-500">


                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};
export default Footer