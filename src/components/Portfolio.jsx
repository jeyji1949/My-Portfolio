import { useState } from 'react';
import { MailIcon, GithubIcon, LinkedinIcon, MenuIcon, XIcon } from 'lucide-react';
import { Helmet } from 'react-helmet';

const personalInfo = {
  name: "EL KHRAIBI Jihane",
  title: "Full Stack, Mobile & Game Developer | UI/UX Designer",
  description:
    "Versatile developer with strong experience in web (ReactJS, Node.js, Firebase, MongoDB), mobile (React Native, Flutter, Java), and game development (Unity, C#). I also specialize in designing user-friendly interfaces using Figma and building WordPress websites. Creative and detail-oriented, I deliver secure, responsive, and engaging digital experiences — from Figma design to final deployment."
};

const skills = [
  { name: "ReactJS", level: 90 },
  { name: "React Native", level: 85 },
  { name: "Flutter", level: 75 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "MySQL", level: 70 },
  { name: "Firebase", level: 85 },
  { name: "Java", level: 80 },
  { name: "Java JEE", level: 70 },
  { name: ".NET / C#", level: 65 },
  { name: "C++ / C / VB", level: 60 },
  { name: "Unity / Game Dev", level: 85 },
  { name: "Figma / UI Design", level: 90 },
  { name: "WordPress", level: 80 }
];

const projects = [
  {
    title: "MediGarde App",
    description: "A React Native app to locate open pharmacies in real time using Firebase and Google Maps.",
    tags: ["React Native", "Firebase", "Google Maps API"]
  },
  {
    title: "Relaxify",
    description: "A mobile stress management app for students built with Flutter and Firebase.",
    tags: ["Flutter", "Firebase", "UX/UI"]
  },
  {
    title: "Paper Quest: العقل الممزق",
    description: "A psychological narrative game built in Unity using C#: an immersive escape room based on memory recovery.",
    tags: ["Unity", "C#", "Game Design"]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio developed with ReactJS and Tailwind CSS.",
    tags: ["ReactJS", "Tailwind CSS", "Frontend"]
  },
  {
    title: "Personal Blog",
    description: "A blog platform using React and Firebase with a clean CMS-like structure.",
    tags: ["React", "Firebase", "Blog"]
  },
  {
    title: "E-commerce WordPress Site",
    description: "A WooCommerce-based store with Elementor and SEO optimization.",
    tags: ["WordPress", "WooCommerce", "SEO"]
  }
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>{personalInfo.name} | Portfolio</title>
        <meta name="description" content={personalInfo.title} />
      </Helmet>

      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-300">{personalInfo.name}</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <NavItem active={activeSection === 'home'} onClick={() => setActiveSection('home')}>Home</NavItem>
              <NavItem active={activeSection === 'skills'} onClick={() => setActiveSection('skills')}>Skills</NavItem>
              <NavItem active={activeSection === 'projects'} onClick={() => setActiveSection('projects')}>Projects</NavItem>
              <NavItem active={activeSection === 'contact'} onClick={() => setActiveSection('contact')}>Contact</NavItem>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-300"
              >
                {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800">
            <MobileNavItem active={activeSection === 'home'} onClick={() => { setActiveSection('home'); setMobileMenuOpen(false); }}>Home</MobileNavItem>
            <MobileNavItem active={activeSection === 'skills'} onClick={() => { setActiveSection('skills'); setMobileMenuOpen(false); }}>Skills</MobileNavItem>
            <MobileNavItem active={activeSection === 'projects'} onClick={() => { setActiveSection('projects'); setMobileMenuOpen(false); }}>Projects</MobileNavItem>
            <MobileNavItem active={activeSection === 'contact'} onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }}>Contact</MobileNavItem>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeSection === 'home' && <HomePage info={personalInfo} setActiveSection={setActiveSection} />}
        {activeSection === 'skills' && <SkillsPage skills={skills} />}
        {activeSection === 'projects' && <ProjectsPage projects={projects} />}
        {activeSection === 'contact' && <ContactPage />}
      </main>

      <footer className="bg-indigo-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/jeyji1949" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/jihane-el-khraibi-328260250" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><LinkedinIcon /></a>
            <a href="mailto:jeelkhraibi@gmail.com" className="hover:text-gray-300"><MailIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Les composants secondaires (NavItem, MobileNavItem, HomePage, SkillsPage, ProjectsPage, ContactPage) sont inchangés et doivent être ajoutés à la suite
// Tu peux les coller à partir de ton code initial ou me dire si tu veux que je les complète aussi ici.
function NavItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? 'text-indigo-600 bg-gray-100'
          : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}

function MobileNavItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
        active
          ? 'text-indigo-600 bg-gray-100'
          : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
}

function HomePage({ info, setActiveSection }) {
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


function SkillsPage({ skills }) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage({ projects }) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Thanks for reaching out! I will reply shortly.');
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
