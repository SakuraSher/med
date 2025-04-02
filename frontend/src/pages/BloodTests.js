import React from 'react';

const BloodTests = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Blood Tests</h1>
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://www.healthians.com/images/service-images/blood-test.png" 
          alt="Blood Tests" 
          className="rounded-lg mb-6 w-full"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Detailed Blood Analysis</h2>
          <p className="text-gray-300">
            Our blood testing services cover a wide range of health markers:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Hemoglobin Tests</li>
            <li>Blood Sugar Tests</li>
            <li>Cholesterol Profile</li>
            <li>Blood Group Testing</li>
            <li>Infection Markers</li>
            <li>Hormone Tests</li>
          </ul>
          <button className="primary-button mt-6">
            Book Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default BloodTests; 