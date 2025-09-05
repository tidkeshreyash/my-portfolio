import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import HeroRight from "./Hero-right";

function Hero() {
    return (
        <section id='home' className="bg-grid-animated min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 mx-4 sm:mx-8 md:mx-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 w-full">

                {/* Left Side (40%) */}
                <div className="lg:col-span-2 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                        Hi, I’m <span className="text-purple-400">Shreyash Tidke</span>
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-2 sm:mb-3 font-size">
                        I am a{' '}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            <Typewriter
                                words={['Software Engineer', 'Full Stack Java Developer', 'Freelancer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1200}
                            />
                        </span>
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        Building scalable and modern web applications with a passion for clean code and problem-solving.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href="https://drive.google.com/file/d/1Rq4Nz-b5tHU03iRtHxpWGSgofEKhS7XM/view?usp=sharing" download>
                            <button type="button" className="button w-full mt-2">
                                <span className="inner">

                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        style={{width: "22px",
  height: "22px", marginBottom: "4px"}}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7 4h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                                        />
                                        <line x1="9" y1="13" x2="15" y2="13" />
                                        <line x1="9" y1="17" x2="15" y2="17" />
                                        <line x1="9" y1="9" x2="10" y2="9" />
                                    </svg>
                                    Resume
                                </span>
                            </button>
                        </a>
                    </div>

                </div>

                {/* Right Side (60%) */}
                <div className="lg:col-span-3 flex justify-center items-center mt-6 md:mt-0">
                    <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl flex items-center justify-center">
                        <HeroRight />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Hero;
