import React, {useState, useLayoutEffect} from 'react';
import {Link} from "react-router-dom";
import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";

const HomeThreeColumns = () => {
    const bags = 47;
    const foundations = 7;
    const collections = 22;
    let [countBags, setCountBags] = useState(0);
    let [countFoundations, setCountFoundations] = useState(0);
    let [countCollections, setCountCollections] = useState(0);
    let [position, setPosition] = useState(0);

    useLayoutEffect(() => {
        function updatePosition() {
            setPosition(window.pageYOffset);
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();

        if (position >= 220) {
            var intervalId = setInterval(()=> {
                if (countBags <= bags) {
                    setCountBags(() => countBags++)
                }if (countFoundations <= foundations) {
                    setCountFoundations(() => countFoundations++)
                }if (countCollections <= collections) {
                    setCountCollections(() => countCollections++)
                }
            },40);
        }
        return ()=> {
            clearInterval(intervalId);
        // return () =>
            window.removeEventListener('scroll', updatePosition);
        }
    });

    return (
        <article className="home-three-columns" id="three-columns">
            <section className="column-field">
                <div>
                    <h1>{countBags}</h1>
                    <p>ODDANYCH WORKÓW</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo id nulla non congue. Nam maximus odio lacinia dictum egestas.
                    </p>
                </div>
                <div>
                    <h1>{countFoundations}</h1>
                    <p>WSPARTYCH ORGANIZACJI</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo id nulla non congue. Nam maximus odio lacinia dictum egestas.
                    </p>
                </div>
                <div>
                    <h1>{countCollections}</h1>
                    <p>ZORGANIZOWANYCH ZBIÓREK</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo id nulla non congue. Nam maximus odio lacinia dictum egestas.
                    </p>
                </div>
            </section>
            <section className="short-info">
                <p>Wystarczą 4 proste kroki</p>
                <div className="decoration"> </div>
            </section>
            <section className="info-logos">
                <div>
                    <img alt="icon" src={icon1}/>
                    <h2>Wybierz rzeczy</h2>
                    <div className="border"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img alt="icon" src={icon2}/>
                    <h2>Spakuj je</h2>
                    <div className="border"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img alt="icon" src={icon3}/>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <div className="border"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img alt="icon" src={icon4}/>
                    <h2>Zamów kuriera</h2>
                    <div className="border"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </section>
            <section className="info-buttons">
                <Link to="/logowanie">ODDAJ RZECZY</Link>
            </section>
        </article>
    )
};

export default HomeThreeColumns;