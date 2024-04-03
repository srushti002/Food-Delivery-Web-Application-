


import React from 'react';
import Navbar from '../components/Navbar';
import Home1 from './Home1'; // Import Home1 component
import './Home2.css'; // Import CSS file for styling

// Import your images from the assets folder
import biryani from '../assets/Biryani_2.avif';
import burger from '../assets/Burger.avif';
import pizza from '../assets/Pizza.avif';
import chinese from '../assets/Chinese.avif';
import paratha from '../assets/Paratha.avif';
import rolls from '../assets/Rolls.avif';
import offerImage1 from '../assets/offer1.jpg';
import offerImage2 from '../assets/offer2.jpg';
import offerImage3 from '../assets/offer3.jpg';
import offerImage4 from '../assets/offer4.jpg';

const foodItems = [
  { id: 1, image: biryani },
  { id: 2, image: burger},
  { id: 3, image: pizza },
  { id: 4, image: chinese  },
  { id: 5, image: paratha },
  { id: 6, image: rolls },
];

const offerItems = [
  { id: 1, image: offerImage1, title: 'Special Combo Offer', details: 'Burger King' },
  { id: 2, image: offerImage2, title: 'Weekend Bonanza', details: "McDonald's"},
  { id: 3, image: offerImage3, title: 'Family Feast Deal', details: 'Subway' },
  { id: 4, image: offerImage4, title: 'Limited Time Offer', details: 'Cakes & Desserts' },
];

const Home2 = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>What's on Your Mind?</h2>
        <div className="horizontal-scroll">
          {foodItems.map((item) => (
            <div key={item.id} className="food-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <h2>Offers</h2>
        <div className="horizontal-scroll">
          {offerItems.map((offer) => (
            <div key={offer.id} className="offer-item">
              <img src={offer.image} alt={`Offer ${offer.id}`} />
              <h3>{offer.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Render Home1 component below the Offers */}
        <Home1 />
      </div>
    </div>
  );
};

export default Home2;
