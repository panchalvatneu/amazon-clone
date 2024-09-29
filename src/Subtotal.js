import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({0} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )} //basket.length
        decimalScale={2}
        value={0} //getBasketTotal(basket)
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
