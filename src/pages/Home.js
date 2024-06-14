import React, { useState } from 'react';
import Background from '../components/Background';
import {useNavigate} from 'react-router-dom';


const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    // Fonction pour ouvrir le modal
    const openModal = () => {
        setShowModal(true);
    };

    // Fonction pour fermer le modal et rediriger vers la page d'accueil
    const closeModalAndRedirect = () => {
        setShowModal(false);
        // Redirection vers la page d'accueil en utilisant useHistory
        navigate('/Accueil');
    };

    return (
        <div>
            <Background />
            <div className="center-container">
                <div className="text-container">
                    <h1> Bienvenue sur mon portfolio </h1>
                    <p> Développeuse front-end</p>
                    {/* Lier l'ouverture du modal au clic sur le bouton */}
                    <button className='square_btn' onClick={openModal}>Entrer</button>
                </div>
            </div>

            {/* Le modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModalAndRedirect}>&times;</span>
                        <div className="modal-text">
                            <p>
                                Hé là ! 🚀<br/><br/>
                                Bienvenue sur mon portfolio ! 🎉<br/><br/>
                                Attention, vous entrez dans une zone en pleine effervescence créative ! 💡<br/><br/>
                                Mais avant de vous plonger dans les délices de mes projets, laissez-moi vous glisser un secret... 🤫<br/><br/>
                                Ce portfolio est un peu comme une recette en cours de cuisson - délicieux, mais pas encore tout à fait prêt ! 🍳<br/><br/>
                                Vous pourriez trouver quelques épices manquantes, des ajustements à faire ici et là, mais ne vous inquiétez pas, je suis aux fourneaux, en train de peaufiner chaque détail avec passion ! 🔥<br/><br/>
                                Alors, installez-vous confortablement, profitez de la visite et revenez bientôt pour découvrir les dernières créations toutes chaudes sorties du four ! 🍰✨<br/><br/>
                                À bientôt ! 🚀
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;