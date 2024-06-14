import React from 'react';
import Navigation from '../components/Navigation';

const Apropos = () => {
  // Tableau des langages
  let langages = [
    "Figma", "JavaScript", "ReactJs", "Html/Css/Sass", "GitHub",
    "Webdesign", "Recherche utilisateur", "SwiftUi", "API",
    "Responsive", "UxDesign", "QR Code"
  ];

  // Fonction pour déterminer l'icône de chaque langage
  const langageIcon = (langage) => {
    if (langage === "Figma" || langage === "Webdesign" || langage === "UxDesign") {
      return '🎨';
    } else if (langage === "GitHub" || langage === "Responsive" || langage === "Html/Css/Sass" || langage === "ReactJs" || langage === "API" || langage === "SwiftUi" || langage === "JavaScript") {
      return '💻';
    } else {
      return '🔍';
    }
  }

  return (
    <main className='apropos-background'>
      <Navigation />
      <div className="apropos-container">
        <div className="left">
          <h1>A propos de moi</h1>

          <div className="localisation">
            <h4>France</h4>
            <div className="role">
              <p>Développeuse front-end</p>
              <p>UX/UI</p>
              {/* QR Code ici */}
              <img className="qr-code" src="/assets/image/qrcode.png" alt="QR Code" />
            </div>
          </div>
        </div>

        <div className="right badges animate__animated animate__fadeIn">
          {langages.map((langage, index) => (
            <div className="badge" key={index}>
              {langage !== "QR Code" ? (
                <span>
                  {langageIcon(langage)}
                  {langage}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Apropos;
