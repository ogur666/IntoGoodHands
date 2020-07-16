import React, {useEffect, useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeFoundations from "./HomeFoundations";
import HomeContact from "./HomeContact";
import {NavLink} from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Home = () => {

    return (
        <>
            <header >
                <nav className="home-header">
                    <section>
                        <NavLink exact to="/logowanie" > Zaloguj się</NavLink>
                        <NavLink to="/rejestracja" > Załóż konto</NavLink>
                    </section>
                    <ul className="home-menu">
                        <li><Link activeClass="active" to="element1" spy={true}  smooth={true} duration={500} >Start</Link></li>
                        <li><Link activeClass="active" to="element2" spy={true} offset={-100} smooth={true} duration={500} >O co chodzi?</Link></li>
                        <li><Link activeClass="active" to="element3" spy={true} smooth={true} duration={500} >O nas</Link></li>
                        <li><Link activeClass="active" to="element4" spy={true} smooth={true} duration={500} >Fundacje i organizacje</Link></li>
                        <li><Link activeClass="active" to="element5" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Element name="element1" ><HomeHeader/></Element>
                <Element name="element2" ><HomeThreeColumns/></Element>
                <Element name="element3" ><HomeAboutUs/></Element>
                <Element name="element4" ><HomeFoundations/></Element>
                <Element name="element5" ><HomeContact/></Element>
            </main>
        </>
    )
};

export default Home;