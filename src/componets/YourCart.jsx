import "../index.css";
import { useState } from "react";

function YourCart({ cartItems }) {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.name}</span>
            <span>
              {item.count}x <p>@${item.price.toFixed(2)}</p>$
              {(item.count * item.price).toFixed(2)}
            </span>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      <div className="cart-total">
        <strong>Total:</strong>
        <span>
          $
          {cartItems
            .reduce((total, item) => total + item.count * item.price, 0)
            .toFixed(2)}
        </span>
      </div>
      <button className="confirm-btn">Confirm Order</button>
    </div>
  );
}

export default YourCart;
