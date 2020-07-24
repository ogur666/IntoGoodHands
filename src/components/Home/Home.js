import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeAboutUs from "./HomeAboutUs";
import HomeFoundations from "./HomeFoundations";
import HomeContact from "./HomeContact";
import {NavLink} from "react-router-dom";
import { Link, Element } from 'react-scroll'
import firebase from 'firebase/app';
import 'firebase/auth';


const Home = ({user}) => {

    const handleCheckSignIn = () => {
        return (user != null) ? <NavigationAuth user={user} /> : <NavigationNonAuth />
    };

    return (
        <>
            {handleCheckSignIn()}
        </>
    );
};

    const NavigationAuth = ({user}) => {

    return (
        <>
            <header >
                <nav className="home-header">
                    <section>
                        <span>{user}</span>
                        <NavLink exact to="/oddaj-rzeczy" > Oddaj rzeczy</NavLink>
                        <NavLink to="/wylogowano" onClick={() => firebase.auth().signOut()} > Wyloguj</NavLink>
                    </section>
                    <ul className="home-menu">
                        <li><Link activeClass="active" to="header" spy={true}  smooth={true} duration={500} >Start</Link></li>
                        <li><Link activeClass="active" to="three-columns" spy={true} smooth={true} duration={500} >O co chodzi?</Link></li>
                        <li><Link activeClass="active" to="about-us" spy={true} smooth={true} duration={500} >O nas</Link></li>
                        <li><Link activeClass="active" to="foundations" spy={true} smooth={true} duration={500} >Fundacje i organizacje</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Element name="header" ><HomeHeader user={user}/></Element>
                <Element name="three-columns" ><HomeThreeColumns user={user}/></Element>
                <Element name="about-us" ><HomeAboutUs/></Element>
                <Element name="foundations" ><HomeFoundations/></Element>
                <Element name="contact" ><HomeContact/></Element>
            </main>
        </>
    )
};
    const NavigationNonAuth = () =>  {
        return (
            <>
                <header >
                    <nav className="home-header">
                        <section>
                            <NavLink exact to="/logowanie" > Zaloguj się</NavLink>
                            <NavLink to="/rejestracja" > Załóż konto</NavLink>
                        </section>
                        <ul className="home-menu">
                            <li><Link activeClass="active" to="header" spy={true}  smooth={true} duration={500} >Start</Link></li>
                            <li><Link activeClass="active" to="three-columns" spy={true} smooth={true} duration={500} >O co chodzi?</Link></li>
                            <li><Link activeClass="active" to="about-us" spy={true} smooth={true} duration={500} >O nas</Link></li>
                            <li><Link activeClass="active" to="foundations" spy={true} smooth={true} duration={500} >Fundacje i organizacje</Link></li>
                            <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Element name="header" ><HomeHeader/></Element>
                    <Element name="three-columns" ><HomeThreeColumns/></Element>
                    <Element name="about-us" ><HomeAboutUs/></Element>
                    <Element name="foundations" ><HomeFoundations/></Element>
                    <Element name="contact" ><HomeContact/></Element>
                </main>
            </>
        )
};

export default Home;