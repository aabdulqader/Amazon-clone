import React, { useContext } from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import useStateValue, {
  StateContext,
} from "../../../ContextData/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useContext(StateContext);

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span key={index}>
                <StarIcon />
              </span>
            ))}
        </div>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
