import React from 'react';

const AboutUs = () => {
  const stats = [
    { number: "1M+", label: "Satisfied Customers" },
    { number: "50+", label: "Cities" },
    { number: "200+", label: "Collection Centers" },
    { number: "1000+", label: "Tests Available" }
  ];

  const values = [
    {
      title: "Quality Assurance",
      description: "NABL accredited labs with accurate and reliable results"
    },
    {
      title: "Convenience",
      description: "Home sample collection and digital reports"
    },
    {
      title: "Affordability",
      description: "Competitive pricing with no compromise on quality"
    },
    {
      title: "Expert Care",
      description: "Qualified healthcare professionals and support"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-6">About Medimaa</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We are committed to making quality healthcare accessible and affordable for everyone. 
            Our mission is to empower people to take control of their health through preventive care.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-800 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              Email: contact@medimaa.com
            </p>
            <p className="text-gray-300">
              Phone: 1800-123-4567 (Toll Free)
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 