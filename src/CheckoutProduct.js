import React from "react";

import { useStateValue } from "./ContextApi/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, proimage, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      price: price,
    });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={proimage} alt="prodimage" />
      <div className="checkout_product_content">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="product_button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
