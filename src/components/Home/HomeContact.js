import React, {useState} from 'react';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg'

const HomeContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [errorNameClass, setErrorNameClass] = useState("");
    const [errorEmailClass, setErrorEmailClass] = useState("");
    const [errorMessageClass, setErrorMessageClass] = useState("");
    const [isClicked, setClicked] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageError("");
        setEmailError("");
        setNameError("");
        setErrorNameClass("");
        setErrorEmailClass("");
        setErrorMessageClass("");
        setClicked(true);

        if (name.includes(" ") || name.length === 0) {
            setNameError("Podane imię jest nieprawidłowe!");
            setErrorNameClass("error-line")
        }
        if (!email.includes("@")) {
            setEmailError("Podany email jest nieprawidłowy!");
            setErrorEmailClass("error-line");
        }
        if (message.length <120) {
            setMessageError("Wiadomość musi mieć co najmniej 120 znaków!");
            setErrorMessageClass("error-line");
        }
    };

    const handleSend = () => {
        if (messageError.length === 0 &&
            nameError.length === 0 &&
            emailError.length === 0 &&
            isClicked === true
        ) {
            setName("");
            setEmail("");
            setMessage("");
            // return (
            //     <>
            //         Wiadomość została wysłana! Wkrótce się skontaktujemy.
            //     </>
            // )
            setSubmitMessage("Wiadomość została wysłana! Wkrótce się skontaktujemy.")
        }
    };

    return (
        <article className="home-contact">
            <section className="contact-background"></section>
            <section className="contact-text">
                <h2>Skontaktuj się z nami</h2>
                <div className="decoration"> </div>
                <span className="submit-message" >{submitMessage}</span>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Wpisz swoje imię
                            <input
                                className={errorNameClass}
                                placeholder="Krzysztof"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <p className="name error">{nameError}</p>
                        </label>
                        <label>
                            Wpisz swój email
                            <input
                                className={errorEmailClass}
                                type="email"
                                placeholder="abc@xyz.pl"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <p className="email error">{emailError}</p>
                        </label>
                    </div>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea
                            className={errorMessageClass}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <p className="message error">{messageError}</p>
                    </label>
                    <button>Wyślij</button>
                </form>
                <footer>
                    <span>Copyright by Coders Lab & Arek Ogórek</span>
                    <span>
                        <a href="https://www.facebook.com/CodersLabSzkolaIT/" target="_blank" rel="noopener noreferrer">
                            <img alt="Facebook" src={Facebook}/>
                        </a>
                        <a href="https://www.instagram.com/coders.lab/" target="_blank" rel="noopener noreferrer">
                            <img alt="Instagram" src={Instagram}/>
                        </a>
                    </span>
                </footer>
            </section>
        </article>
    )
};

export default HomeContact;