import React from "react";
import ReactCurrency from "react-currency-format";

import { useStateValue } from "./ContextApi/StateProvider";
import "./SubTotal.css";

function SubTotal() {
  const [{ basket, totalPrice }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <ReactCurrency
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items): <strong> {value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
