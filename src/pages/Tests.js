import React from 'react';

const Tests = () => {
  const testCategories = [
    {
      name: "Preventive Health Checkups",
      tests: ["Basic Health Checkup", "Advanced Health Screening", "Senior Citizen Package"]
    },
    {
      name: "Diabetes",
      tests: ["HbA1c", "Blood Sugar Fasting", "Diabetes Complete Package"]
    },
    {
      name: "Heart",
      tests: ["Lipid Profile", "Cardiac Risk Markers", "Heart Care Package"]
    },
    {
      name: "Covid-19",
      tests: ["RT-PCR Test", "Covid Antibody", "Post-Covid Checkup"]
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Tests</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {testCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
              <ul className="space-y-3">
                {category.tests.map((test, testIndex) => (
                  <li key={testIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{test}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                      Book
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests; 