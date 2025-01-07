import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart, url, loading } = useContext(StoreContext);

  if (loading) {
    return <p>Loading...</p>; // Prevent rendering until data is ready
  }

  const itemCount = cartItems?.[id] || 0; // Use optional chaining and default value

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt={name}
          height={250}
          onError={(e) => (e.target.src = assets.DefaultImage)} // Handle broken image
        />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.RatingStars} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs.{price}</p>

        {!itemCount ? (
          <button className="add-to-cart-button" onClick={() => addToCart(id)}>
            Add to Cart
          </button>
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.RemoveRedIcon}
              alt="Remove item"
              width={30}
              height={30}
              style={{ cursor: "pointer" }}
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.AddIconGreen}
              alt="Add item"
              width={33}
              height={33}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
