import React from 'react';

const Packages = () => {
  const packages = [
    {
      name: "Basic Wellness",
      price: "₹999",
      tests: ["Complete Blood Count", "Blood Sugar", "Thyroid Profile"],
      description: "Essential health screening package"
    },
    {
      name: "Comprehensive Health",
      price: "₹2499",
      tests: ["Full Body Checkup", "Vitamin Profile", "Cardiac Risk Assessment"],
      description: "Complete health evaluation package"
    },
    {
      name: "Women's Health",
      price: "₹1999",
      tests: ["Female Hormone Profile", "Vitamin D & B12", "Thyroid Function"],
      description: "Specialized package for women's health"
    },
    {
      name: "Senior Care",
      price: "₹3499",
      tests: ["Diabetes Screening", "Heart Health", "Bone Health Profile"],
      description: "Comprehensive package for seniors"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Health Packages</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">{pkg.name}</h2>
                <span className="text-2xl font-bold text-blue-400">{pkg.price}</span>
              </div>
              <p className="text-gray-400 mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-6">
                {pkg.tests.map((test, testIndex) => (
                  <li key={testIndex} className="text-gray-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {test}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-colors duration-300">
                Book Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages; 