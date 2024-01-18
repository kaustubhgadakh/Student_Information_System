import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Home() {
  const [Data, setdata] = useState([{}]);

  const { sId } = useParams();

  function loaddata() {
    axios.get("http://localhost:8080/StudentInfo").then(
      (response) => {
        console.log(response.data);
        setdata(response.data);
      },
      (error) => {
        console.log(error.data);
      }
    );
  }

  useEffect(() => {
    loaddata();
  }, []);

  function DeleteHandler(sId) {
    axios.delete(`http://localhost:8080/StudentInfo/${sId}`).then(
      (response) => {
        console.log("Deleted sucsessfully");
        loaddata();
      },
      (error) => {
        console.log(error.data);
      }
    );
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((record, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{record.firstName}</td>
                <td>{record.lastName}</td>
                <td>{record.email}</td>
                <td>{record.contact}</td>
                <td>{record.city}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view/${record.sId}`}
                  >
                    View
                  </Link>

                  <Link
                    className=" btn btn-outline-success mx-2"
                    to={`/edit/${record.sId}`}
                  >
                    Edit
                  </Link>

                  <Link
                    type="button"
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      DeleteHandler(record.sId);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
