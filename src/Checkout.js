import React from "react";

import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./ContextApi/StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkoutAd"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              proimage={item.proimage}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
