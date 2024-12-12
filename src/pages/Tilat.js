import React from "react";
/*import styles from "../styles/Tilat.css";*/
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import pic1 from "../components/images/1733078098213.jpg";
import pic2 from "../components/images/1733078316788.jpg";
import pic3 from "../components/images/1733078412420.jpg";


/**new images required must be horizontal and not vertical */
function Place() {
  const carouselItemStyle = {
    width: "100%",
    height: "700px", // Set a fixed height
  };

  const imageStyle = {
    objectFit: "cover", // Use 'contain' to maintain aspect ratio without stretching
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  };

  return (
<Carousel className="text-center" style={{ marginTop: "20px" }}>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src={pic1}
          alt="First slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>Huippuluokan näytönohjaimet</h3>
          <p>
            Tehokkaat näytönohjaimet tarjoavat upean pelikokemuksen ja nopean
            suorituskyvyn videoeditoinnissa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src={pic2}
          alt="Second slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>Intel-suorittimet</h3>
          <p>
            Intel-prosessorit tarjoavat huippuluokan suorituskyvyn ja
            energiatehokkuuden monipuolisiin käyttötarkoituksiin.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src={pic3}
          alt="Third slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>AMD Ryzen -prosessorit</h3>
          <p>
            AMD Ryzen -sarjan prosessorit tarjoavat monipuolisen suorituskyvyn
            pelaamiseen ja multitaskingiin.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Place;
