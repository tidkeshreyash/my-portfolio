import React from "react";
import myPhoto from "../assets/pht_org.jpeg";

const About = () => {
  return (
    <section id="about" className="text-white py-20">
      {/* Heading & Subheading */}
      <div className="text-center mb-12 px-4 mt-4">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          Full-Stack Developer | Problem Solver | Tech Enthusiast
        </p>
      </div>

      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 gap-10 ">
        {/* Left Column: Photo (50%) */}
        <div className="w-full md:w-1/2 flex justify-center">
  <div className="w-full max-w-md h-[420px]">
    <img
      src={myPhoto}
      alt="Shreyash Tidke"
      className="w-full h-full rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>


        {/* Right Column: About Paragraphs with Glassmorphism */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-4 bg-glow">
            <p className="text-gray-200 leading-relaxed text-lg">
              Hi, I’m <strong>Shreyash Tidke</strong>, and I have over 2+ years of experience building web applications and other software solutions. I am passionate about creating intuitive and efficient applications that solve real-world problems.
            </p>

            <p className="text-gray-200 leading-relaxed text-lg">
              I have expertise in <strong>Java full-stack web applications</strong> as well as development using <strong>WordPress</strong>. My focus is on delivering high-quality, scalable solutions while keeping user experience in mind.
            </p>

            <p className="text-gray-200 leading-relaxed text-lg">
              I also run a platform called <a href="https://learnerbits.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">LearnerBits</a> where I post tech-related blogs and share insights related to software engineering and development. It’s my way of helping other developers learn and grow in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
