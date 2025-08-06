import React from "react";

const Services = () => {
  const services = [
    {
      title: "Application Developer",
      description:
        "Building fast, reliable, and scalable cross-platform applications tailored to your needs.",
    },
    {
      title: " Full Stack Web Developer",
      description:
        "Designing and developing modern, responsive, and user-friendly websites with latest technologies.",
    },
    {
      title: "Software Developer",
      description:
        "Creating customized software solutions that solve real-world problems efficiently.",
    },
    {
      title: " Deployment & Hosting",
      description:
        "Deploying apps using Render, Vercel, Firebase, and other cloud services.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white py-16 px-6 sm:px-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        My Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-purple-800 bg-opacity-20 border border-purple-600 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
