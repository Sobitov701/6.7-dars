import { useState } from "react";
import YourCart from "./componets/YourCart";
import ProductList from "./componets/ProductLIst";
import useFetch from "./hooks/useFetch";

function App() {
  const { data: desserts, loading } = useFetch(
    "http://localhost:3000/desserts"
  );
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, count) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + count } : item
        );
      } else {
        return [...prevCart, { ...product, count }];
      }
    });
  };

  return (
    <div className="container grid-container">
      <ProductList
        desserts={desserts}
        loading={loading}
        addToCart={addToCart}
      />
      <YourCart cartItems={cartItems} />
    </div>
  );
}

export default App;
