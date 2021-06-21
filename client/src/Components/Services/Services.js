import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../Service/Service";

const Services = () => {
  let [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1590/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="service-body">
      <div className="container Services-container">
        <h2 className="Services-title pt-5">Services We Provide</h2>
        <div className="Services-grid mx auto pt-5">
          {services.map((service) => (
            <Service service={service} />
          ))}
        </div>
      </div>
      <div className="container text-center mt-5">
        <button className="serviceBtn mb-3">View More</button>
      </div>
    </div>
  );
};

export default Services;
