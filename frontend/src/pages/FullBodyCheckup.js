import React from 'react';

const FullBodyCheckup = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Full Body Checkup</h1>
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://www.healthians.com/images/service-images/full-body-checkup.png" 
          alt="Full Body Checkup" 
          className="rounded-lg mb-6 w-full"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Comprehensive Health Assessment</h2>
          <p className="text-gray-300">
            Our full body checkup provides a complete overview of your health status. 
            The comprehensive package includes:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Complete Blood Count</li>
            <li>Diabetes Screening</li>
            <li>Lipid Profile</li>
            <li>Liver Function Test</li>
            <li>Kidney Function Test</li>
            <li>Thyroid Profile</li>
            <li>Vitamin Deficiency Tests</li>
          </ul>
          <button className="primary-button mt-6">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullBodyCheckup; 