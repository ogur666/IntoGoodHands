import React, {useState} from 'react';
import FoundationsContainer from "../Foundations/FoundationsContainer";
import Local from "../Foundations/Local";
import NGOsContainer from "../Foundations/NGOsContainer";

const HomeFoundations = () => {

    const [fundActive, setFundActive] = useState(true);
    const [ngoActive, setNgoActive] = useState(false);
    const [localActive, setLocalActive] = useState(false);
    const [fundClass, setFundClass] = useState("show-border");
    const [ngoClass, setNgoClass] = useState("");
    const [localClass, setLocalClass] = useState("");

    const showWhoWeHelp = () => {
        if (fundActive === true) {
            return <FoundationsContainer/>
        } else if (ngoActive === true) {
            return <NGOsContainer/>
        } else if (localActive === true) {
            return <Local/>
        }
    };
    const handleFundClick = (e) => {
        e.preventDefault();
        setFundActive(true);
        setNgoActive(false);
        setLocalActive(false);
        setFundClass("show-border");
        setNgoClass("");
        setLocalClass("");
    };
    const handleNgoClick = (e) => {
        e.preventDefault();
        setFundActive(false);
        setNgoActive(true);
        setLocalActive(false);
        setFundClass("");
        setNgoClass("show-border");
        setLocalClass("");
    };
    const handleLocalClick = (e) => {
        e.preventDefault();
        setFundActive(false);
        setNgoActive(false);
        setLocalActive(true);
        setFundClass("");
        setNgoClass("");
        setLocalClass("show-border");
    };

    return (
        <article className="home-foundations" id="foundations">
            <h2>Komu pomagamy?</h2>
            <div className="decoration"> </div>
            <section className="buttons">
                <button className={fundClass} onClick={handleFundClick}>Fundacjom</button>
                <button className={ngoClass} onClick={handleNgoClick}>Organizacjom pozarządowym</button>
                <button className={localClass} onClick={handleLocalClick}>Lokalnym zbiórkom</button>
            </section>
            <section className="fund-text">
                {showWhoWeHelp()}
            </section>
        </article>
    )
};

export default HomeFoundations;