import React from "react";

import { useStateValue } from "./ContextApi/StateProvider";
import "./Product.css";

function Product({ id, title, proimage, price, rating }) {
  //initial state basket name
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        proimage: proimage,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="product_ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={proimage} alt="prodmage" />
      <button onClick={addToBasket} className="product_button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
