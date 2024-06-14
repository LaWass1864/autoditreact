import React from 'react';
import Navigation from '../components/Navigation';
import FormContact from '../components/FormContact';

const Contact = () => {
    return (
        <main className='contact-background'>
                <Navigation />
            <div className="contact-container">
                <div className="left-container">
                    <h1>Contactez-moi</h1> 
                    <img src="assets/image/business-woman.png" alt="businesswoman" />
                </div>
                <div className="right-container">
                    <FormContact />
                </div>
            </div>
        </main>
    );
};

export default Contact;