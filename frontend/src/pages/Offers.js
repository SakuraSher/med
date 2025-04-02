import React from 'react';

const Offers = () => {
  const offers = [
    {
      title: "First Time User",
      code: "FIRST50",
      discount: "50% OFF",
      description: "Get 50% off on your first health checkup",
      validTill: "March 31, 2024",
      maxDiscount: "₹1000"
    },
    {
      title: "Senior Citizen Special",
      code: "SENIOR25",
      discount: "25% OFF",
      description: "Special discount for senior citizens",
      validTill: "Ongoing",
      maxDiscount: "₹2000"
    },
    {
      title: "Family Package",
      code: "FAMILY20",
      discount: "20% OFF",
      description: "Discount on family health packages",
      validTill: "April 15, 2024",
      maxDiscount: "₹2500"
    },
    {
      title: "Women's Day Special",
      code: "WOMEN30",
      discount: "30% OFF",
      description: "Special offer on women's health packages",
      validTill: "March 8, 2024",
      maxDiscount: "₹1500"
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Current Offers</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-blue-500/20">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-blue-400">{offer.title}</h2>
                <span className="text-2xl font-bold text-orange-500">{offer.discount}</span>
              </div>
              <p className="text-gray-300 mt-2">{offer.description}</p>
              <div className="mt-4 p-3 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Use Code:</span>
                  <code className="text-lg font-mono text-orange-400">{offer.code}</code>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                <div>Valid till: {offer.validTill}</div>
                <div>Max discount: {offer.maxDiscount}</div>
              </div>
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers; 