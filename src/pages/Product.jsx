import React from "react";
import { FaStar } from "react-icons/fa";
import Eye from  "../assest/img/eye-1.svg"
import "./Quality.css"

export default function Product(props) {
  const starStyle = {
    color: '#FFCE1F',
    marginRight: '5px', 
  };
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <FaStar style={starStyle} />
      <FaStar style={starStyle} />
      <FaStar style={starStyle} />
      <FaStar style={starStyle} />

       (Review 23000)
      <p className="price">How to work with prototype design with adobe xd featuring tools</p>
      <p>{props.description}</p>
        <p > <img className="eye"  src={Eye} /> 2345 students watched </p>
      <p>
        
      </p>
    </div>
  );
}