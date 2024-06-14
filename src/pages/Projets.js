import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const projectsData = [
  {
    "nom": "Cooking App",
    "image": "/assets/image/cookingApp.png",
    "description": "La Cooking App est une application web Html/CSS/ReactJs intégrant une Api de recettes. Avec une barre de recherche intuitive, elle permet aux utilisateurs d'explorer une variété de recettes, offrant ainsi une expérience culinaire interactive et personnalisée.",
    "langages": ["Html", "Sass", "Javascript", "ReactJs", "Api"],
    "lien_github": "https://github.com/LaWass1864/Cook-app",
    "lien_site": "https://cosmic-cook.netlify.app"
  },
  {
    "nom": "La montagne",
    "image": "/assets/image/lamontagne.png",
    "description": "Un site web dynamique mettant en valeur des photos de montagnes. Conçu avec Html, SCSS et les puissants modèles de mise en page Flexbox et Grid, cette plateforme offre une expérience immersive pour les passionnés d'aventure.",
    "langages": ["Html", "Sass"],
    "lien_github": "https://github.com/LaWass1864/Lamontagne",
    "lien_site": "https://the-mountain-site.netlify.app"
  },
  {
    "nom": "Mon Portfolio",
    "image": "/assets/image/monportfolio.png",
    "description": "Une vitrine interactive de mes réalisations. Conçu avec Javascript et ReactJs, mon portfolio est enrichi de Librairies telles que Framer Motion pour des animations fluides et React Slick pour une navigation intuitive. Inspiré par une maquette élaborée sur Figma, ce portfolio offre une expérience utilisateur immersive, mettant en valeur mes compétences et projets de manière dynamique.",
    "langages": ["Html", "Sass", "Javascript", "ReactJs", "Librairies"],
    "lien_github": "https://github.com/LaWass1864/portFolio",
    "lien_site": "https://autoditreact.netlify.app/"
  },
  {
    "nom": "WeatherApp",
    "image": "/assets/image/weatherapp.png",
    "description": "Une application simple et efficace alimentée par l'Api OpenWeatherMap. Développée avec Javascript, React, Sass, et une Api météo, Weather App affiche les prévisions météorologiques de votre ville, incluant la température actuelle. De plus, une fonctionnalité de barre de progression représente visuellement le cycle jour-nuit en fonction des heures de lever et de coucher du soleil.",
    "langages": ["Html", "Sass", "Javascript", "ReactJs", "Api"],
    "lien_github": "https://github.com/LaWass1864/weather-app",
    "lien_site": "https://appweatherbywass.netlify.app"
  },
  {
    "nom": "HumanKind",
    "image": "/assets/image/humanApp.png",
    "description": "HumanKind est un projet inspiré par le site HumanKind, développé avec HTML et SCSS. Il propose une page unique et réactive, mettant en valeur l'esthétique du site original. Avec un design élégant et des interactions fluides, HumanKind offre une expérience immersive pour découvrir l'art et la créativité.",
    "langages": ["Html", "Sass", "Javascript", "ReactJs", "Api"],
    "lien_github": "https://github.com/LaWass1864/BEACH",
    "lien_site": "https://fabulous-croissant-0ee07e.netlify.app/"
  }
];

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="main-container">
      <div className="container projets-background">
          <h1>Mes projets</h1>
        {projectsData.map(project => (
            <motion.div 
            key={project.nom} 
            layoutId={project.nom} 
            className="card"
            onClick={() => setSelectedId(project.nom)}
          >
            <motion.h5>{project.nom}</motion.h5>
            <motion.img src={project.image} alt={project.nom} className="thumbnail"/>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} className="overlay">
              {projectsData.map(project => project.nom === selectedId && (
                <div key={project.nom} className="modal">
                  <div className="modal-content">
                    <motion.img src={project.image} alt={project.nom} className="modal-image"/>
                    <div className="modal-details">
                      <motion.h5>{project.nom}</motion.h5>
                      <motion.p>{project.description}</motion.p>
                      <motion.div className="tags">
                        {project.langages.map((langage, index) => (
                          <motion.span key={index} className="tag">{langage}</motion.span>
                        ))}
                      </motion.div>
                      <motion.a href={project.lien_github} target="_blank" rel="noopener noreferrer">GitHub</motion.a>
                      <motion.a href={project.lien_site} target="_blank" rel="noopener noreferrer">Site</motion.a>
                    </div>
                  </div>
                  <motion.button onClick={() => setSelectedId(null)} className="close-button">Close</motion.button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
