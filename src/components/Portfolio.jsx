import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MailIcon, GithubIcon, LinkedinIcon, MenuIcon, XIcon } from 'lucide-react';

import personalInfo from '../data/personalInfo';
import skills from '../data/skills';
import projects from '../data/projects';

import NavItem from './NavItem';
import HomePage from './HomePage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import MobileNavItem from './MobileNavItem';

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['home', 'skills', 'projects', 'contact'];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
      <Helmet>
        <title>{personalInfo.name} | Portfolio</title>
        <meta name="description" content={personalInfo.title} />
      </Helmet>

      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-300">{personalInfo.name}</span>
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavItem
                  key={link}
                  active={currentSection === link}
                  onClick={() => setCurrentSection(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </NavItem>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800">
            {navLinks.map((link) => (
              <MobileNavItem
                key={link}
                active={currentSection === link}
                onClick={() => {
                  setCurrentSection(link);
                  setMenuOpen(false);
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </MobileNavItem>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentSection === 'home' && <HomePage info={personalInfo} setActiveSection={setCurrentSection} />}
        {currentSection === 'skills' && <SkillsPage skills={skills} />}
        {currentSection === 'projects' && <ProjectsPage projects={projects} />}
        {currentSection === 'contact' && <ContactPage />}
      </main>

      <footer className="bg-indigo-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://github.com/jeyji1949" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/jihane-el-khraibi-328260250" target="_blank" rel="noopener noreferrer"><LinkedinIcon /></a>
            <a href="mailto:jeelkhraibi@gmail.com"><MailIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
