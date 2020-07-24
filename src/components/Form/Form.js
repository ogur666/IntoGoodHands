import React from 'react';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import firebase from "firebase";
import 'firebase/auth';
import HomeContact from "../Home/HomeContact";
import FormHeader from "./FormHeader";


const Form = ({user}) => {

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
                        <li><Link to="/">Start</Link></li>
                        <li><Link to="/#three-columns" >O co chodzi?</Link></li>
                        <li><Link to="/#about-us">O nas</Link></li>
                        <li><Link to="/#foundations">Fundacje i organizacje</Link></li>
                        <li><Link to="/#contact">Kontakt</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <FormHeader/>
                <HomeContact/>
            </main>
        </>
    )
};

export default Form;