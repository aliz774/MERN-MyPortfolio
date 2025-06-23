// src/Home.js
import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold animate-pulse">Hi, I'm Developer</h1>
        <p className="text-xl mt-4">I design and develop modern, dynamic websites with Tailwind CSS.</p>
        <a
          href="/project"
          className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition transform hover:scale-110"
        >
          View My Projects
        </a>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: '💻',
              title: 'Web Design',
              desc: 'Creating beautiful and responsive layouts with Tailwind CSS.',
            },
            {
              icon: '🚀',
              title: 'Animations',
              desc: 'Adding subtle yet powerful animations for dynamic user experiences.',
            },
            {
              icon: '⚡',
              title: 'Performance',
              desc: 'Ensuring fast load times and smooth interactions for users.',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition"
            >
              <div className="text-indigo-600 text-5xl mb-4 transform hover:rotate-12 transition">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
}

export default Home;
