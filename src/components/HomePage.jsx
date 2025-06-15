export default function HomePage({ info, setActiveSection }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-12">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">Hi, I'm {info.name}</h1>
        <h2 className="text-2xl text-indigo-600 mb-4">{info.title}</h2>
        <p className="text-lg text-gray-600 mb-6">{info.description}</p>
        <button
          onClick={() => setActiveSection('projects')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          View My Projects
        </button>
      </div>
      <div className="md:w-1/2 text-center">
        <img
          src="me.jpg"
          alt={`${info.name} profile`}
          className="mx-auto rounded-full w-40 h-40 object-cover mb-4"
        />
      </div>
    </div>
  );
}