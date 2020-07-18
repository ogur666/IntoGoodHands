import React, {useEffect, useState} from 'react';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg'

const HomeContact = () => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <article className="home-contact">
            <section className="contact-background"></section>
            <section className="contact-text">
                <h2>Skontaktuj się z nami</h2>
                <div className="decoration"> </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Wpisz swoje imię
                            <input
                                placeholder="Krzysztof"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </label>
                    {/*</div>*/}
                    {/*<div>*/}
                        <label>
                            Wpisz swój email
                            <input
                                type="email"
                                placeholder="abc@xyz.pl"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </label>
                    <button>Wyślij</button>
                </form>
                <footer>
                    <span>Copyright by Coders Lab & Arek Ogórek</span>
                    <span>
                        <a href="https://www.facebook.com/CodersLabSzkolaIT/" target="_blank">
                            <img alt="Facebook" src={Facebook}/>
                        </a>
                        <a href="https://www.instagram.com/coders.lab/" target="_blank">
                            <img alt="Instagram" src={Instagram}/>
                        </a>
                    </span>
                </footer>
            </section>
        </article>
    )
};

export default HomeContact;