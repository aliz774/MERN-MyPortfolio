 const Project = () => (
  <>
    <section className="bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 py-32 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-extrabold animate-pulse text-white">Hii, I am a developer</h1>
      <p className="mt-7 animate-fade-in-down text-xl text-white">
        I Design And Develop Modern, dynamic websites with Tailwind CSS
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition transform hover:scale-110"
      >
        View My Projects
      </a>
    </section>

    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {['Dynamic Dashboard', 'Landing Page', 'Portfolio Site'].map((title, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold mb-2 text-indigo-600">{title}</h3>
            <p className="text-gray-600">Responsive & Animated Features</p>
          </div>
        ))}
      </div>
    </section>

    <section className="flex justify-center items-center flex-col py-16">
      <p className="text-5xl font-bold text-indigo-600">What Clients Say</p>
      <p className="mt-8">"Harshil's work is top-notch. The animation and responsive design brought our ideas to life!" - Client A</p>
      <p className="mt-8">"Highly recommend! The dynamic features made our app stand out." - Client B</p>
    </section>
  </>
);
export default Project;