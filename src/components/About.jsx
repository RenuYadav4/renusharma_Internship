import React from 'react';

const About = () => {
  return (
    <div className="relative w-full bg-white py-12 px-4 md:px-16">
      {/* Hero Image Section */}
      <div className="relative mb-12">
        <img
          src="src\assets\aboutbg.jpeg"
          alt="Internship Hero"
          className="w-full h-72 md:h-[28rem] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Empowering Futures, One Internship at a Time
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          At <span className="font-semibold text-gray-800">Internship Inc.</span>, we believe in real-world experience over just theoretical knowledge.
          Our internship programs are carefully crafted to help students and fresh graduates explore industry challenges, grow professionally, and
          contribute meaningfully to innovative projects. Whether you're into development, design, marketing, or strategy — we provide a platform
          that empowers your journey to success.
        </p>
        <div className="mt-8 text-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
