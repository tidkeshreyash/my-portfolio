import React from "react";

const Footer = () => {
    return (
        <section class="footer-wrapper relative py-10  sm:pt-16 lg:pt-12 bg-gray-900">
            <div className="footer-content">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                        <div class="md:ml-4 col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                                <span className="text-purple-400">Shreyash Tidke</span>
                            </h1>
                            <p class="text-base leading-relaxed text-gray-300 mt-5">Passionate about crafting clean code & seamless user experiences.</p>

                            <ul class="flex items-center space-x-3 mt-4">
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shreyash-tidke-2b6872219/" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.786-1.75-1.75s.784-1.75 1.75-1.75 1.75.786 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.865 0-2.151 1.455-2.151 2.963v5.703h-3v-10h2.881v1.367h.041c.401-.758 1.379-1.556 2.838-1.556 3.034 0 3.596 1.997 3.596 4.59v5.599z" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/shreyash758/" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="leetcode">
                                            <path fill="currentColor" d="M22,14.355c0-0.742-0.564-1.345-1.26-1.345H10.676c-0.696,0-1.26,0.604-1.26,1.345c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355z"></path>
                                            <path fill="currentColor" d="M22,14.355H9.416l0,0c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355L22,14.355z"></path>
                                            <path fill="currentColor" d="M4.781,14.355H4.735c0.015,0.736,0.315,1.474,0.897,2.068c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.31,0.449-0.71,0.729-1.271,0.729c-0.02,0-0.041,0-0.062-0.001c-0.2-0.007-0.364-0.087-0.53-0.181c-0.035-0.02-0.07-0.04-0.104-0.062C8.963,23.593,10.221,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.272-0.275-0.627-0.413-0.978-0.413c-0.332,0-0.659,0.124-0.906,0.374l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363C5.024,15.716,4.79,15.052,4.781,14.355L4.781,14.355z"></path>
                                            <path fill="currentColor" d="M4.735,14.355H1.918c0.006,1.485,0.595,2.945,1.739,4.101c1.324,1.336,2.657,2.663,3.984,3.996c0.113,0.114,0.236,0.215,0.37,0.3c0.034,0.021,0.068,0.042,0.104,0.062c0.166,0.094,0.33,0.174,0.53,0.181c0.021,0.001,0.041,0.001,0.062,0.001c0.561,0,0.961-0.28,1.271-0.729c0.291-0.421,0.286-1.368-0.182-1.671l-0.204-0.198c-1.321-1.324-2.652-2.638-3.96-3.974C5.05,15.83,4.75,15.091,4.735,14.355L4.735,14.355z"></path>
                                            <path fill="currentColor" d="M3.483,18.187l4.312,4.361C8.767,23.527,10.113,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.53-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363c-0.463-0.468-0.697-1.15-0.697-1.863c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635c-0.648-0.646-1.471-1.116-2.392-1.33l-0.033-0.006l2.447-2.504c0.512-0.514,0.494-1.366-0.037-1.901c-0.53-0.535-1.376-0.553-1.887-0.038L3.483,10.476C2.509,11.458,2,12.814,2,14.312S2.509,17.206,3.483,18.187L3.483,18.187z"></path>
                                            <path fill="currentColor" d="M8.115,22.814c-0.176-0.097-0.332-0.219-0.474-0.361c-1.327-1.333-2.66-2.66-3.984-3.996c-1.988-2.009-2.302-4.936-0.785-7.32c0.234-0.37,0.529-0.694,0.839-1.004c3.208-3.214,6.415-6.43,9.623-9.644c0.625-0.626,1.497-0.652,2.079-0.066c0.559,0.562,0.527,1.455-0.077,2.065c-0.77,0.776-1.54,1.55-2.31,2.325c-0.041,0.122-0.14,0.2-0.226,0.287c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-1.136,1.167-1.096,2.938,0.068,4.128c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.321,0.466-0.739,0.75-1.333,0.728C8.445,22.987,8.281,22.907,8.115,22.814L8.115,22.814z"></path>
                                            <path fill="currentColor" d="M13.021,4.826c-0.044,0.115-0.138,0.19-0.221,0.273c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-0.58,0.596-0.853,1.349-0.827,2.102h0.046C4.781,14.368,4.78,14.339,4.78,14.31c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.248,0.251,0.576,0.375,0.908,0.375c0.35,0,0.705-0.138,0.977-0.413c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635C14.757,5.51,13.938,5.041,13.021,4.826L13.021,4.826z M14.4,0c-0.194,0.001-0.386,0.045-0.562,0.132C14.021,0.049,14.212,0.005,14.4,0L14.4,0z"></path>
                                            <path fill="currentColor" d="M14.432,0c-0.01,0-0.021,0-0.031,0c-0.189,0.004-0.379,0.049-0.562,0.132c-0.178,0.081-0.349,0.2-0.504,0.356c-3.208,3.214-6.416,6.43-9.623,9.644c-0.31,0.31-0.604,0.634-0.839,1.004c-0.652,1.025-0.966,2.151-0.954,3.262h2.818c-0.026-0.753,0.248-1.506,0.827-2.102c1.402-1.442,2.842-2.849,4.265-4.272c0.111-0.119,0.261-0.189,0.372-0.305c0.849-0.889,1.737-1.742,2.6-2.619c0.083-0.084,0.177-0.159,0.221-0.273c0.002-0.005,0.003-0.009,0.005-0.014c0.77-0.775,1.54-1.549,2.31-2.325c0.604-0.61,0.637-1.503,0.077-2.065C15.133,0.14,14.786,0,14.432,0L14.432,0z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/tidkeshreyash/" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_.shrey._23/" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                            <path
                                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>


                            </ul>
                        </div>

                        <div>
                            <p class="text-sm font-semibold tracking-widest text-white uppercase">Quick Links</p>

                            <ul class="mt-6 space-y-4 text-gray-200">
                                <li>
                                    <a href="#home" title="" class="flex text-base transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Home </a>
                                </li>

                                <li>
                                    <a href="#about" title="" class="flex text-base transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> About </a>
                                </li>

                                <li>
                                    <a href="#experience" title="" class="flex text-base transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Experience </a>
                                </li>

                                <li>
                                    <a href="#skills" title="" class="flex text-base transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Skills </a>
                                </li>

                            </ul>
                        </div>

                        <div class="mt-6">
                            {/* <p class="text-sm font-semibold tracking-widest text-white uppercase">Resources</p> */}

                            <ul class="mt-6 space-y-4 text-gray-200">
                                <li>
                                    <a href="#projects" title="" class="flex text-base transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Projects </a>
                                </li>

                                <li>
                                    <a href="#education" title="" class="flex text-base  transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Education </a>
                                </li>

                                <li>
                                    <a href="#contact" title="" class="flex text-base  transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Contact </a>
                                </li>

                                <li>
                                    <a href="#blogs" title="" class="flex text-base transition-all duration-200 hover:text-purple-500 focus:text-purple-500"> Blogs </a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                            <p class="text-sm font-semibold tracking-widest text-gray-300 uppercase">
                                Subscribe to newsletter
                            </p>

                            <form action="#" method="POST" class="mt-6">
                                <div>
                                    <label for="email" class="sr-only">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        class="block w-64 p-4 text-gray-200 placeholder-gray-400 
               transition-all duration-200 
               bg-gray-900 border border-gray-700 rounded-md 
               focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    class="inline-flex items-center justify-center px-6 py-2 mt-3 font-semibold 
             text-white button"
                                >
                                    <span className="inner">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="w-5 h-5 icon"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11c0-3.038-1.64-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.36 6 7.962 6 11v3c0 .386-.145.735-.405 1.002L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />

                                        </svg>
                                        Subscribe
                                    </span>
                                </button>
                            </form>
                        </div>

                    </div>

                    <hr class="mt-10 mb-8 border-gray-600" />

                    <p class="text-sm text-center text-gray-400">© 2026 Shreyash Tidke | Built with React & Love ❤️</p>
                </div>
            </div>
        </section>

    );
};

export default Footer;
