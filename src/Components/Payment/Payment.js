import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { getCartTotal } from "../../ContextData/Reducer";
import { useStateValue } from "../../ContextData/StateProvider";
import ChackoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import "./Payment.css";

const Payment = () => {
  const history = useHistory();
  const [{ user, cart }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        {/* section - delivary address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivary Address</h3>
          </div>
          <div className="payment__address">
            <p>
              <strong>{user?.email}</strong>
            </p>
            <p>143 React Lane</p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        {/* section -  item list */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delevary</h3>
          </div>
          <div className="payment__items">
            {cart.map(({ id, title, image, price }) => (
              <ChackoutProduct
                id={id}
                title={title}
                price={price}
                image={image}
              />
            ))}
          </div>
        </div>
        {/* section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe */}
            <form onSubmit={handleSubmit}>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button className="payment__btn">Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
