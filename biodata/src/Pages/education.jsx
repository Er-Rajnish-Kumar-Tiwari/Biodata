import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor in Computer Science Engineering",
      institution: "Guru Kashi University",
      year: "2023 - 2027",
      result: "Currently Pursuing",
    },
    {
      title: "12th in Science",
      institution: "Bihar School Examination Board",
      year: "2021 - 2023",
      result: "Passed with 69%",
    },
    {
      title: "Advanced Diploma in Computer Application",
      institution: "Global Institute of Information Technology",
      year: "2021 - 2022",
      result: "Passed with 79%",
    },
    {
      title: "10th",
      institution: "Bihar School Examination Board",
      year: "2020 - 2021",
      result: "Passed with 80%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white py-16 px-6 sm:px-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        Educations
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-purple-800/30 border border-purple-600 rounded-xl p-5 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-300">{edu.title}</h3>
            <h4 className="text-md sm:text-lg font-medium text-gray-300 mt-1">
              {edu.institution}
              <span className="block text-sm text-gray-400">{edu.year}</span>
            </h4>
            <p className="mt-2 text-sm text-gray-400 font-semibold">{edu.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

