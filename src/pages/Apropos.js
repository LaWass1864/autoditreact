import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Reorder } from 'framer-motion';

const Apropos = () => {
  // Tableau des langages
  const [langages, setLangages] = useState([
    "Figma", "JavaScript", "ReactJs", "Html/Css/Sass", "GitHub",
    "Webdesign", "Recherche utilisateur", "SwiftUi", "API",
    "Responsive", "UxDesign", "Wireframe"
  ]);

  // Fonction pour déterminer l'icône de chaque langage
  const langageIcon = (langage) => {
    if (langage === "Figma" || langage === "Webdesign" || langage === "UxDesign" || langage === "Wireframe") {
      return '🎨';
    } else if (langage === "GitHub" || langage === "Responsive" || langage === "Html/Css/Sass" || langage === "ReactJs" || langage === "API" || langage === "SwiftUi" || langage === "JavaScript") {
      return '💻';
    } else {
      return '🔍';
    }
  }

  const halfLength = Math.ceil(langages.length / 2);
  const langagesCol1 = langages.slice(0, halfLength);
  const langagesCol2 = langages.slice(halfLength);

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
          <div className="column">
            <Reorder.Group axis="y" values={langagesCol1} onReorder={(newOrder) => setLangages([...newOrder, ...langagesCol2])}>
              {langagesCol1.map((langage) => (
                <Reorder.Item key={langage} value={langage}>
                  <div className="badge">
                    <span>
                      {langageIcon(langage)} {langage}
                    </span>
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
          <div className="column">
            <Reorder.Group axis="y" values={langagesCol2} onReorder={(newOrder) => setLangages([...langagesCol1, ...newOrder])}>
              {langagesCol2.map((langage) => (
                <Reorder.Item key={langage} value={langage}>
                  <div className="badge">
                    <span>
                      {langageIcon(langage)} {langage}
                    </span>
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Apropos;
