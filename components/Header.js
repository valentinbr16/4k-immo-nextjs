import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {

        // Définition des variables dynamiques grâce au hook useState.
    // Elles permettent de changer les classes et donc le style ou le comportement des éléments composants la navbar.
    const [headerLogo, setHeaderTitle] = useState('header__logo');
    const [navbarToggle, setNavbarToggle] = useState('navbar__toggle');
    const [navbarElement, setNavbarElement] = useState('navbar__element');
    const [toggleClass, setToggleClass] = useState('navbar');

    // Fonction permettant de lancer la fonction headerChangeOnScroll() lorsque l'utilisateur scrolle.
    // Grâce au hook useEffect, ce comportement est effectif dès le montage du composant.
    useEffect(() => {
        // Fonction permettant de changer les valeurs des variables en scrollant, selon la position de l'utilisateur dans la fenêtre.
        // Ces variables étant utilisées pour définir la classe (className) des éléments, on peut ainsi modifier le style de la navbar en scrollant.
        const headerChangeOnScroll = () => {
            if (window.scrollY <= 50) {
                setHeaderTitle("header__logo");
                // Pour la variable toggleClass, on prend en compte le fait que, selon la largeur de l'appareil ou de la fenêtre, la classe 'responsive' s'applique ou non.
                setToggleClass(
                    toggleClass === 'navbar' 
                    ? 'navbar' 
                    : 'navbar responsive'
                );
                setNavbarToggle("navbar__toggle");
                setNavbarElement("navbar__element");
            } else {
                setHeaderTitle("header__logo--minimize");
                setToggleClass(toggleClass === 'navbar' ? 'navbar--minimize' : 'navbar--minimize responsive');
                setNavbarToggle("navbar__toggle--minimize");
                setNavbarElement("navbar__element--minimize");
            }
        };

        window.addEventListener("scroll", headerChangeOnScroll);
        return () => {
            window.removeEventListener("scroll", headerChangeOnScroll);
        }
    }, []);
    
    // _______________________________________________________

    // Fonction qui, au clic de l'utilisateur, va ajouter ou retirer la chaîne de caractère 'responsive' à la variable toggleClass.
    // On peut ainsi dérouler ou cacher le menu déroulant de la navbar lorsque la fenêtre est suffisamment étroite.
    const toggleNavbar = () => {
        if(!toggleClass.includes('responsive')) {
            setToggleClass(`${toggleClass} responsive`);
        } else {
            setToggleClass(toggleClass.replace('responsive',''));
        }
    }

    return (  
        <header className='header'>
            
            <figure className={headerLogo} >
                <Image src={'/logo4K_Immo.png'} alt="Logo de l'agence 4K Immo" width='100%' height='100%' layout='responsive' objectFit='contain' />
            </figure>

            <nav className={toggleClass}>                    
                <p className={navbarToggle} onClick={toggleNavbar}>&#9776;</p>

                <a className={navbarElement} href="#presentation">Qui sommes-nous ?</a>
                <a className={navbarElement} href="#realisations">Nos logements</a>
                <a className={navbarElement} href="#contact">Nous contacter</a>
            </nav>

        </header>
    );
}
 
export default Header;