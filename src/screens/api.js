// api.js

export const placeOrder = async (cartItems) => {
    try {
      const response = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }), // Assuming your API expects items array for order
      });
  
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
  
      const data = await response.json();
      console.log('Order placed successfully:', data);
      return data; // Optionally, you can return the order data if needed
    } catch (error) {
      console.error('Error placing order:', error);
      throw error;
    }
  };
  