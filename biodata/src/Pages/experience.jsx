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
          <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <Briefcase /> Software Development Engineer Intern – NTS Nihon Global Pvt. Ltd., New Delhi
          </h3>
          <p className="text-sm text-gray-300 mb-2"> Duration: 1st May 2025 – Present</p>
          <p className="text-sm text-gray-300 mb-4"> Role: Software Development Engineer Intern</p>

          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm pl-2">
            <li>Developed and maintained full-stack web applications using MERN stack</li>
            <li>Built RESTful APIs with Node.js and Express for internal tools</li>
            <li>Performed performance optimization and debugging for existing applications</li>
            <li>Worked in Agile environment to deliver iterative software releases</li>
            <li>Collaborated with UI/UX designers to implement responsive designs</li>
            <li>Explored Firebase and Tailwind CSS to enhance application features</li>
            <li>Assisted in improving code quality with version control and peer reviews</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <Briefcase /> MERN Stack Developer Intern – CommuSync Pvt. Ltd., Noida
          </h3>
          <p className="text-sm text-gray-300 mb-2"> Duration: 6 Weeks</p>
          <p className="text-sm text-gray-300 mb-4"> Role: MERN Stack Developer Intern</p>

          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm pl-2">
            <li>Developed dynamic front-end components using React.js and Tailwind CSS</li>
            <li>Integrated MongoDB database with Express and Node.js for CRUD operations</li>
            <li>Implemented authentication & authorization using JWT</li>
            <li>Managed application state and API integration in React apps</li>
            <li>Optimized database queries to improve backend performance</li>
            <li>Collaborated with senior developers through Git/GitHub version control</li>
            <li>Deployed applications on Render & Vercel for live testing</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <Briefcase />Application Developer – CREOMIND INNOVATIONS PRIVATE LIMITED. Andhra Pradesh
          </h3>
          <p className="text-sm text-gray-300 mb-2"> Duration: 5 Weeks</p>
          <p className="text-sm text-gray-300 mb-4"> Role: Application Developer</p>

          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm pl-2">
            <li>Developed job application portals and dashboards using MERN stack</li>
            <li>Implemented form submission, validation, and applicant tracking features</li>
            <li>Integrated backend APIs for managing job listings and applications</li>
            <li>Enhanced front-end UI/UX for better user engagement with Tailwind CSS</li>
            <li>Collaborated with HR team to implement automated notification systems</li>
            <li>Performed testing and debugging to ensure smooth application flow</li>
            <li>Deployed portals and maintained code quality through Git version control</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
            <Briefcase /> Full Stack Developer – Stefax IT Services. Gurgaon
          </h3>
          <p className="text-sm text-gray-300 mb-2"> Duration: August-2025 - Present</p>
          <p className="text-sm text-gray-300 mb-4"> Role: Full Stack Developer</p>

          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm pl-2">
            <li>Built full-stack web applications using React, Node.js, and MongoDB</li>
            <li>Designed and integrated RESTful APIs for front-end consumption</li>
            <li>Implemented user authentication, authorization, and session management</li>
            <li>Optimized application performance with efficient database queries</li>
            <li>Worked collaboratively with team members on feature development and debugging</li>
            <li>Enhanced UI/UX with responsive layouts and Tailwind CSS components</li>
            <li>Deployed and maintained applications on cloud platforms with CI/CD practices</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

