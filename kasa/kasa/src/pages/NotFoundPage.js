import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../styles/NotFound.css"

function NotFoundPage() {
    return (
        <div>
            <Header />
            <p className='erreur'>404</p>
            <p className='oups'>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link'>
                Retourner sur la page d'accueil
            </Link>
            <Footer />
        </div>
    );
};

export default NotFoundPage;