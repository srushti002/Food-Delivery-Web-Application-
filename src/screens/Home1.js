

import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
//import Navbar from '../components/Navbar'; // Assuming Navbar component is in the same directory

export default function Home1() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/foodData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Check the fetched data structure

      if (data.foodItems && data.foodCategories) {
        setFoodItems(data.foodItems);
        setFoodCategories(data.foodCategories);
      } else {
        throw new Error('Invalid data structure received');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  const renderFoodItemsByCategory = () => {
    console.log('Food Items:', foodItems); // Log foodItems before rendering
    console.log('Food Categories:', foodCategories); // Log foodCategories before rendering
    
    return foodCategories.map((category) => (
      <div key={category._id} className="category-container">
        <h2 className="category-title">{category.CategoryName}</h2> {/* Use CategoryName */}
        <div className="cards-container">
          {foodItems
            .filter((item) => item.CategoryName === category.CategoryName) // Use CategoryName
            .map((item) => (
              <Card key={item._id} foodName={item.name} options={item.options} ImgSrc={item.img} />
            ))}
        </div>
      </div>
    ));
  };

  console.log('Error:', error); // Log error state for debugging
  
  return (
    <div>
      
        {error ? (
          <div>Error fetching data</div>
        ) : (
          renderFoodItemsByCategory()
        )}
      </div>
  
  );
}


