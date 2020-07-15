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
                        <NavLink activeClassName="active" exact to="/logowanie" > Zaloguj się</NavLink>
                        <NavLink activeClassName="active" to="/rejestracja" > Załóż konto</NavLink>
                    </section>
                    <ul className="home-menu">
                        <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Start</Link></li>
                        <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500} >O co chodzi?</Link></li>
                        <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >O nas</Link></li>
                        <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500} >Fundacje i organizacje</Link></li>
                        <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Element name="test1" className="element" ><HomeHeader/></Element>
                <Element name="test2" className="element" ><HomeThreeColumns/></Element>
                <Element name="test3" className="element" ><HomeAboutUs/></Element>
                <Element name="test4" className="element" ><HomeFoundations/></Element>
                <Element name="test5" className="element" ><HomeContact/></Element>
            </main>
        </>
    )
};

export default Home;