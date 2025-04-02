import React from 'react';

const SpecializedPanels = () => {
  const panels = [
    {
      name: "Cardiac Panel",
      tests: [
        "Lipid Profile",
        "ECG",
        "Cardiac Risk Markers",
        "Blood Pressure",
        "Heart Rate Monitoring"
      ],
      price: "₹3999",
      description: "Comprehensive heart health assessment"
    },
    {
      name: "Diabetes Panel",
      tests: [
        "HbA1c",
        "Fasting Blood Sugar",
        "Post Prandial Blood Sugar",
        "Kidney Function Test",
        "Urine Microalbumin"
      ],
      price: "₹2999",
      description: "Complete diabetes screening and monitoring"
    },
    {
      name: "Thyroid Panel",
      tests: [
        "T3",
        "T4",
        "TSH",
        "Anti-TPO",
        "Thyroid Antibodies"
      ],
      price: "₹2499",
      description: "Detailed thyroid function analysis"
    },
    {
      name: "Vitamin Panel",
      tests: [
        "Vitamin D",
        "Vitamin B12",
        "Vitamin B Complex",
        "Folate",
        "Iron Studies"
      ],
      price: "₹3499",
      description: "Comprehensive vitamin deficiency assessment"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Specialized Test Panels</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {panels.map((panel, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-blue-400">{panel.name}</h2>
                <span className="text-xl font-bold text-orange-500">{panel.price}</span>
              </div>
              <p className="text-gray-300 mb-4">{panel.description}</p>
              <div className="space-y-2">
                <h3 className="text-lg font-medium mb-2">Included Tests:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {panel.tests.map((test, testIndex) => (
                    <li key={testIndex}>{test}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-colors duration-300">
                Book Panel
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecializedPanels; 