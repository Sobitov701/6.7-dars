import { useState } from "react";
import "./product.css";

function Product({ d }) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);
  console.log(d);

  return (
    <div className="product-card">
      <img src={d.image.thumbnail} alt={d.name} className="product-image" />
      <h3 className="product-title">{d.name}</h3>
      <p className="product-price">${d.price}</p>
      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Add to Cart
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{d.name}</h2>
            <div className="counter-container">
              <button
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                className="btn btn-secondary"
              >
                -
              </button>
              <span className="counter">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="btn btn-secondary"
              >
                +
              </button>
            </div>
            <button onClick={() => setIsOpen(false)} className="btn btn-danger">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
