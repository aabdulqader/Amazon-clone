import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";
import { useStateValue } from "../../../ContextData/StateProvider";
import "./CheckoutProduct.css";
const ChackoutProduct = forwardRef(({ id, image, price, title }, ref) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () =>
    // remove spacified item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  return (
    <div className="checkoutProduct" ref={ref}>
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  );
});

export default ChackoutProduct;
