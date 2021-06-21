import React from "react";
import "./Admin.css";
import AddService from "../AddService/AddService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const handleAddService = () => {
    const service = document.getElementById("addService");
    if (service.style.display === "none") {
      service.style.display = "block";
    } else {
        service.style.display = "none";
    }
  };
  return (
    <div className="admin-container">
      <div className="row">
        <div className="side-bar col-md-4">
          <div className="side-bar-content-area">
            <div onClick={handleAddService} className="add-service mt-5 d-flex">
              <FontAwesomeIcon icon={faAtom} />
              <p className="add-service-title">Add Service</p>
            </div>
          </div>
        </div>
        <div className="main-bar col-md-8">
          <div className="main-bar-content-area">
            <div className="add-service-container" id="addService">
              <AddService />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
