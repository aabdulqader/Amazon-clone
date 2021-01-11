import React from "react";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal/Subtotal";
import FlipMove from "react-flip-move";
import { useStateValue } from "../../ContextData/StateProvider";
const Checkout = () => {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="chackout__ad">
          <img
            src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
            alt=""
          />
        </div>
        <div className="checkout__list">
          <h3 className="useremail">
            Hello! <strong>{user?.email}</strong>
          </h3>
          <h2 className="checkout__title">Your Sopping Cart</h2>
          <FlipMove>
            {cart.map(({ id, title, image, price }) => (
              <CheckoutProduct
                id={id}
                title={title}
                price={price}
                image={image}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
