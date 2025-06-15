import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiGit } from 'react-icons/si';
import skills from '../data/skills'; // Assuming skills are imported from a data file

export default function SkillsPage({ skills }) {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
         Skills
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl shadow-lg bg-white hover:bg-indigo-100 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex justify-center items-center h-20">
                {/* Icons */}
                <div className="text-4xl text-indigo-600 group-hover:text-indigo-800 transition-colors">
                  {skill.icon}
                </div>
              </div>
              <span className="text-lg font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
