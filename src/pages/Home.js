import React from "react";
import styles from "../styles/Home.css";
import logo from "../components/images/FooniLogo.jpg"

function Home() {
  return (
    <div className="home-container">
      <p>
      Salon FÖÖNI on koko perheen palveleva Parturi-kampaamo, joka sijaitsee aivan Oulunsalon ytimessä.
      </p>

      <img
        src={logo}
        alt="Logo"
        className="home-image"
      />

    <p>
        Meiltä löydät monipuoliset kampaamo- & parturipalvelut.
        Asiantuntemus, ystävällinen palvelu ja näkemykselliset leikkaukset sekä värit ovat vahvuutemme. Salon FÖÖNIssä  teitä palvelee alansa rautaiset ammattilaiset, jotka suhtautuvat työhönsä antaumuksella. 
        Ydinajatuksenamme on tarjota alusta loppuun täydellinen kampaamokäynti ja rakkaudesta sekä intohimosta työhömme syntyy lopulta se tunnelma mitä Salon FÖÖNIssä vaalimme.
        Tervetuloa! 
    </p>
    </div>
  );
}

export default Home;
