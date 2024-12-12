import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from"../styles/henkilokunta.css";
import employee1 from "../components/images/IMG_20240130_205310.jpg";
import employee2 from "../components/images/2024-01-29 21_58_56.612-0200.jpg";


function SalonEmployee({ image, name, title, instagram }) {
  return (
    <div className="text-center m-3">
      <img
        src={image}
        alt={name}
        className="rounded-circle"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h3 className="mt-3">{name}</h3>
      <p>{title}</p>
      <p>
        <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
          @{instagram}
        </a>
      </p>
    </div>
  );
}

function SalonEmployees() {
  const employees = [
    {
      image: {employee1},
      name: "ROSA",
      title: "Parturi-kampaaja ",
      instagram: "millionhairbyrosa",
    },
    {
      image: {employee2},
      name: "MAIJA",
      title: "OMISTAJA/YRITTÄJÄ",
      instagram: "salonfooni",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "John Smith",
      title: "Color Specialist",
      instagram: "johnsmith",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Team</h1>
      <div className="row">
        {employees.map((employee, index) => (
          <div key={index} className="col-md-4">
            <SalonEmployee
              image={employee.image}
              name={employee.name}
              title={employee.title}
              instagram={employee.instagram}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalonEmployees;
