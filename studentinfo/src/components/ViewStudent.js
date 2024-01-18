import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    city: "",
  });

  const { sId } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/StudentInfo/${sId}`);
    setFormData(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {formData.sId}
              <ul className="list-group list-group-flush text-left">
                <li className="list-group-item">
                  <b>Full Name: </b>
                  {formData.lastName + " " + formData.firstName}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {formData.email}
                </li>
                <li className="list-group-item">
                  <b>Contact: </b>
                  {formData.contact}
                </li>
                <li className="list-group-item">
                  <b>City: </b>
                  {formData.city}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
