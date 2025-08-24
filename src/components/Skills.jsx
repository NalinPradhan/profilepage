import React from "react";

const skillsData = {
  "Programming Languages": [
    { name: "JavaScript", color: "bg-yellow-500", textColor: "text-black" },
    { name: "Python", color: "bg-blue-500", textColor: "text-white" },
    { name: "Java", color: "bg-orange-600", textColor: "text-white" },
    { name: "TypeScript", color: "bg-blue-600", textColor: "text-white" },
  ],
  "Frontend Technologies": [
    { name: "React", color: "bg-cyan-400", textColor: "text-black" },
    { name: "HTML5", color: "bg-orange-500", textColor: "text-white" },
    { name: "CSS3", color: "bg-blue-400", textColor: "text-white" },
    { name: "Tailwind CSS", color: "bg-teal-500", textColor: "text-white" },
    { name: "GSAP", color: "bg-green-500", textColor: "text-white" },
  ],
  "Backend & Database": [
    { name: "Node.js", color: "bg-green-600", textColor: "text-white" },
    { name: "Express", color: "bg-gray-700", textColor: "text-white" },
    { name: "MongoDB", color: "bg-green-500", textColor: "text-white" },
    { name: "MySQL", color: "bg-blue-600", textColor: "text-white" },
    { name: "PostgreSQL", color: "bg-blue-700", textColor: "text-white" },
  ],
  "Tools & Technologies": [
    { name: "Git", color: "bg-red-500", textColor: "text-white" },
    { name: "GitHub", color: "bg-gray-800", textColor: "text-white" },
    { name: "Docker", color: "bg-blue-500", textColor: "text-white" },
    { name: "Figma", color: "bg-purple-500", textColor: "text-white" },
    { name: "Postman", color: "bg-orange-400", textColor: "text-black" },
    { name: "Webpack", color: "bg-blue-400", textColor: "text-white" },
  ],
  "Specializations": [
    { name: "MERN Stack", color: "bg-gradient-to-r from-green-400 to-blue-500", textColor: "text-white" },
    { name: "UI/UX Design", color: "bg-gradient-to-r from-purple-400 to-pink-400", textColor: "text-white" },
    { name: "Responsive Design", color: "bg-gradient-to-r from-cyan-400 to-blue-500", textColor: "text-white" },
    { name: "RESTful APIs", color: "bg-gradient-to-r from-green-500 to-teal-500", textColor: "text-white" },
  ]
};

function Skills() {
  return (
    <div className="space-y-6">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="space-y-3">
          <h4 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700 pb-1">
            {category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${skill.color} ${skill.textColor}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
      
      {/* GitHub Profile Badges Section */}
      <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-700">
        <h4 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          GitHub Profile Badges
        </h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
          Add these badges to your GitHub profile README.md:
        </p>
        
        <div className="space-y-2">
          <div className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 p-2 rounded overflow-x-auto">
            <code className="text-zinc-700 dark:text-zinc-300">
              {`![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)`}
            </code>
          </div>
          <div className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 p-2 rounded overflow-x-auto">
            <code className="text-zinc-700 dark:text-zinc-300">
              {`![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)`}
            </code>
          </div>
          <div className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 p-2 rounded overflow-x-auto">
            <code className="text-zinc-700 dark:text-zinc-300">
              {`![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)`}
            </code>
          </div>
        </div>
        
        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-lg">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            <strong>Pro Tip:</strong> Visit{" "}
            <a 
              href="https://shields.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              shields.io
            </a>{" "}
            and{" "}
            <a 
              href="https://github.com/Ileriayo/markdown-badges" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              markdown-badges
            </a>{" "}
            for more badge options and styles!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;