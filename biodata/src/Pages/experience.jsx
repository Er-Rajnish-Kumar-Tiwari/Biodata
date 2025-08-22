import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        {/* Experience Card */}
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Software Development Engineer Intern – NTS Nihon Global Pvt. Ltd., New Delhi
          </h3>
          <p className="text-sm text-gray-300 mb-2"> Duration: 1st May 2025 – Present</p>
          <p className="text-sm text-gray-300 mb-4"> Role: Software Development Engineer Intern</p>

          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm pl-2">
            <li>Worked on full-stack web app development using the MERN stack</li>
            <li>Built and integrated RESTful backend APIs using Node.js and Express</li>
            <li>Performed code debugging and performance optimization</li>
            <li>Collaborated in Agile-based live projects with a development team</li>
            <li>Gained real-world problem-solving and project delivery experience</li>
            <li>Proactively explored and learned new technologies like Firebase & Tailwind CSS</li>
            <li>Also contributed to mobile-friendly app development practices</li>
          </ul>
        </div>

                {/* Experience Card */}
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            MERN Stack Developer Intern – CommuSync Pvt. Ltd., Noida
          </h3>
          <p className="text-sm text-gray-300 mb-2"> Duration: 6 Weeks</p>
          <p className="text-sm text-gray-300 mb-4"> Role: MERN Stack Intern</p>

          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm pl-2">
<li>Developed dynamic front-end components using React.js and Tailwind CSS</li>
    <li>Integrated MongoDB database with Express and Node.js for CRUD operations</li>
    <li>Implemented authentication & authorization using JWT</li>
    <li>Worked on state management and API integration in React apps</li>
    <li>Optimized database queries to improve backend performance</li>
    <li>Collaborated with senior developers through Git/GitHub for version control</li>
    <li>Gained hands-on exposure to deploying apps on Render & Vercel</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}



