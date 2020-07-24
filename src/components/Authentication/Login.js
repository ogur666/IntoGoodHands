import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import firebase from "firebase";
import 'firebase/auth'


const Login = ({user}) => {
    const [email, setEmail] = useState("");
    const [errorEmailClass, setErrorEmailClass] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [errorPasswordClass, setErrorPasswordClass] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError("");
        setErrorEmailClass("");
        setPasswordError("");
        setErrorPasswordClass("");

        if (validateEmail(email) === false) {
            setEmailError("Podany email jest nieprawidłowy!");
            setErrorEmailClass("error-line");
        }
        if (password.length < 6) {
            setPasswordError("Podane hasło jest za krótkie!");
            setErrorPasswordClass("error-line");
        }
        if (validateEmail(email) === true && password.length >= 6) {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(()=>{
                    setEmail("");
                    setPassword("");
                    console.log("Zalogowano")
                })
                .catch(()=>setPasswordError("Nieprawidłowy login lub hasło"))
        }
    };

    const handleCheckLogin = () => {
        return (user != null) ?
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
                <main className="login-page">
                    <section className="contact-text">
                        <h2>Zalogowałeś się!</h2>
                        <div className="decoration"> </div>
                        <Link className="start" to="/">Strona główna</Link>
                    </section>
                </main>
            </>
            :<>
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
                        <h2>Zaloguj się</h2>
                        <div className="decoration"> </div>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <div className="login-inputs">
                            <label>
                                Email
                                <input
                                    className={errorEmailClass}
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <p className="email error">{emailError}</p>
                            </label>
                            <label>
                                Hasło
                                <input
                                    className={errorPasswordClass}
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <p className="error">{passwordError}</p>
                            </label>
                        </div>
                        <div className="login-buttons">
                            <NavLink to="/rejestracja" >Załóż konto</NavLink>
                            <button>Zaloguj się</button>
                        </div>
                    </form>
                </main>
            </>
    };

    return (
        <>
            {handleCheckLogin()}
        </>
    )
};

export default Login;