import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const UserContext = createContext(null);

export function UserContextProvider(props) {
  // Define state inside the component
  const [data, updateData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        updateData(response.data); // Set products data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Call the async function
  }, []); 
  return (
    // Provide the state and updater function via the value prop
    <UserContext.Provider value={{ data, updateData }}>
      {props.children}
    </UserContext.Provider>
  );
}
