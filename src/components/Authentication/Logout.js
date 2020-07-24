import React from 'react';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Logout = () => {

    return (
        <>
            <header >
                <nav className="home-header">
                    <section>
                        <NavLink exact to="/logowanie" > Zaloguj się</NavLink>
                        <NavLink to="/rejestracja" > Załóż konto</NavLink>
                    </section>
                    <ul className="home-menu">
                        <li><Link to="/">Start</Link></li>
                        <li><Link to="/#three-columns" >O co chodzi?</Link></li>
                        <li><Link to="/#about-us">O nas</Link></li>
                        <li><Link to="/#foundations">Fundacje i organizacje</Link></li>
                        <li><Link to="/#contact">Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="login-page">
                <section className="contact-text">
                    <h2>Wylogowałeś się!</h2>
                    <div className="decoration"> </div>
                    <Link className="start" to="/">Strona główna</Link>
                </section>
            </main>
        </>
    )
};

export default Logout;