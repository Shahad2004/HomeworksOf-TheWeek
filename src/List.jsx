import React, { useState } from 'react';
import './List.css'; 
function List() {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [cities, setCities] = useState([]);
  const [buttonColors, setButtonColors] = useState({
    Asia: 'btn-primary',
    Europe: 'btn-primary',
    Africa: 'btn-primary',
  });

  const continentsData = {
    Asia: ['Hong Kong', 'Tokyo', 'Bangkok'],
    Europe: ['Paris', 'Berlin', 'Madrid'],
    Africa: ['Cairo', 'Lagos', 'Cape Town'],
  };

  const cityUrls = {
    'Hong Kong': 'https://www.britannica.com/place/Hong-Kong', 
    Tokyo: 'https://www.gotokyo.org/en/index.html',
    Bangkok: 'https://www.tourismthailand.org/Destinations/Provinces/Bangkok/219',
    Paris: 'https://parisjetaime.com/eng/',
    Berlin: 'https://www.berlin.de/en/',
    Madrid: 'https://www.spain.info/en/destination/madrid/',
    Cairo: 'https://www.britannica.com/place/Cairo',
    Lagos: 'https://www.britannica.com/place/Lagos-Nigeria',
    'Cape Town': 'https://www.britannica.com/place/Cape-Town',
  };

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
    setCities(continentsData[continent]);

    const updatedColors = { ...buttonColors };
    for (const key in updatedColors) {
      if (key === continent) {
        updatedColors[key] = 'btn-success';
      } else {
        updatedColors[key] = 'btn-warning';
      }
    }

    setButtonColors(updatedColors);
  };

  const handleCityClick = (city) => {
    const cityUrl = cityUrls[city];
    if (cityUrl) {
      window.open(cityUrl, '_blank');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Continents of the World</h2>
      <div className="d-flex justify-content-center mt-4">
        {Object.keys(continentsData).map((continent) => (
          <button
            key={continent}
            className={`btn ${buttonColors[continent]} m-2 rounded-pill px-4 continent-button`}
            onClick={() => handleContinentClick(continent)}
          >
            {continent}
          </button>
        ))}
      </div>
      {cities.length > 0 && (
        <div className="mt-4">
          <h3 className="text-center">Cities in {selectedContinent}</h3>
          <ul className="list-group">
            {cities.map((city, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-info city-item"
                onClick={() => handleCityClick(city)}
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default List;
