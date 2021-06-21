import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, description, price, imageURL } = props.service;
  return (
    <div className="Service">
      <img className="Service-image" src={imageURL} alt="" />
      <h4>{name}</h4>
      <h3>${price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;
