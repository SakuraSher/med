import React from 'react';

const Cities = () => {
  const cities = [
    {
      name: "Mumbai",
      areas: ["Andheri", "Bandra", "Colaba", "Dadar"],
      labCount: 24,
      collectionCenters: 45
    },
    {
      name: "Delhi",
      areas: ["Connaught Place", "Dwarka", "Rohini", "Saket"],
      labCount: 32,
      collectionCenters: 56
    },
    {
      name: "Bangalore",
      areas: ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout"],
      labCount: 28,
      collectionCenters: 42
    },
    {
      name: "Hyderabad",
      areas: ["Banjara Hills", "Jubilee Hills", "HITEC City", "Gachibowli"],
      labCount: 22,
      collectionCenters: 38
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Presence</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{city.name}</h2>
                <div className="text-sm text-gray-400">
                  <div>{city.labCount} Labs</div>
                  <div>{city.collectionCenters} Collection Centers</div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Service Areas:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {city.areas.map((area, areaIndex) => (
                    <div key={areaIndex} className="text-gray-300 text-sm">{area}</div>
                  ))}
                </div>
              </div>
              <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities; 