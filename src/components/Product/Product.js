import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
       

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>

      <div>
        <h4 className="product-name"> <Link to={"/product/"+key}>{name}</Link> </h4>
        <br />
        <p>
          {" "}
          <small> by: {seller} </small>{" "}
        </p>
        <h3>${price}</h3>
        <p>
          {" "}
          <small> Only {stock} left in stock - order soon! </small>{" "}
        </p>
        { props.showAddToCart && <button className="main-button" onClick={() => props.handleAddProduct(props.product) } > <FontAwesomeIcon icon={faShoppingCart} /> add to cart </button>}
      </div>
    </div>
  );
};

export default Product;
