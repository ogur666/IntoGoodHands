import React, {useState} from 'react';
import NGO1 from "./NGO1";
import NGO2 from "./NGO2";

const NGOsContainer = () => {
    const [fund1Active, setFund1Active] = useState(true);
    const [fund2Active, setFund2Active] = useState(false);
    const [fund1Class, setFund1Class] = useState("show-border");
    const [fund2Class, setFund2Class] = useState("");

    const listOfNGOs = () => {
        if (fund1Active === true) {
            return <NGO1/>
        } else if (fund2Active === true) {
            return <NGO2/>
        }
    };
    const handleFund1Click = (e) => {
        e.preventDefault();
        setFund1Active(true);
        setFund2Active(false);
        setFund1Class("show-border");
        setFund2Class("");
    };
    const handleFund2Click = (e) => {
        e.preventDefault();
        setFund1Active(false);
        setFund2Active(true);
        setFund1Class("");
        setFund2Class("show-border");
    };

    return (
        <>
            <p className="fund-info">
                W naszej bazie znajdziesz listę zweryfikowanych Organizacji Pozarządowych, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            {listOfNGOs()}
            <div className="numbers-buttons">
                <button className={fund1Class} onClick={handleFund1Click}>1</button>
                <button className={fund2Class} onClick={handleFund2Click}>2</button>
            </div>
        </>
    )
};

export default NGOsContainer;