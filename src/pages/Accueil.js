import React from 'react';
import Navigation from '../components/Navigation';


const Accueil = () => {
    return (
        <main className="accueil-background">
            <Navigation />
            <div className='mainContainer'>
                <div className="left">
                    <h1> Hello, je suis Wassila</h1>
                    <p> Développeuse front-end</p>
                </div>
                <div className='right'>
                    <img src="/assets/image/laptop-guy.png" alt="Laptop Guy" />
                </div>
            </div>
        </main>
    );
};

export default Accueil;
