import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent() {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    city: "",
  });
  
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("submit data...");

    axios.post("http://localhost:8080/StudentInfo", formData)
    navigate("/");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>
          <div className="mb-3">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="form-control"
                  placeholder="Enter the first name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className="form-control"
                  placeholder="Enter the last name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  placeholder="Enter the email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact">Contact</label>
                <input
                  className="form-control"
                  placeholder="Enter the contact number"
                  type="number"
                  name="contact"
                  value={formData.contact}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city">City</label>
                <input
                  className="form-control"
                  placeholder="Enter the city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <button type="submit" className="btn btn-outline-primary" >Submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
