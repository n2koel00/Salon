import React from "react";
import styles from "../styles/ajanvaraus.css";
import Button from 'react-bootstrap/Button';

function Reserve() {
  return (
    <div className="home-container">
      <h1>Ajanvaraus</h1>
      <h2>p. 0402513329</h2>
      <br></br>
      <a href="https://booksalon.fi/salon-fooni" target="_blank" rel="noopener noreferrer">
      <Button variant="info" size="lg">Varaa aika verkossa</Button>
      </a>      
      <h1>Avoinna ma - la sopimuksen mukaan</h1>
    </div>
  );
}

export default Reserve;
