import React from "react";

const skills = [
  ["Full-Stack Developer", 99],
  ["HTML", 95],
  ["CSS", 90],
  ["JavaScript", 92],
  ["J-Query", 90],
  ["React.js", 90],
  ["Bootstrap", 100],
  ["Tailwind CSS", 100],
  ["Frontend Developer", 100],
  ["Python", 90],
  ["Java", 90],
  ["C Language", 95],
  ["C++", 98],
  ["Git", 90],
  ["GitHub", 90],
  ["Backend Developer", 90],
  ["OOPS", 95],
  ["DSA", 80],
  ["Node.js", 90],
  ["Express.js", 90],
  ["Mongoose DB", 95],
  ["TypeScript", 90],
  ["SQL", 95],
  ["React Netive", 95],
  ["Githup Copilot", 95],
  ["Application Developer", 95],
  ["Cursor", 95],
];

const SkillPage = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map(([skill, percent], index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill}</span>
              <span className="text-sm font-semibold">{percent}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
