import React, {useState} from 'react';
import Foundation1 from "./Foundation1";
import Foundation2 from "./Foundation2";
import Foundation3 from "./Foundation3";

const FoundationsContainer = () => {
    const [fund1Active, setFund1Active] = useState(true);
    const [fund2Active, setFund2Active] = useState(false);
    const [fund3Active, setFund3Active] = useState(false);
    const [fund1Class, setFund1Class] = useState("show-border");
    const [fund2Class, setFund2Class] = useState("");
    const [fund3Class, setFund3Class] = useState("");

    const listOfFoundations = () => {
        if (fund1Active === true) {
            return <Foundation1/>
        } else if (fund2Active === true) {
            return <Foundation2/>
        } else if (fund3Active === true) {
            return <Foundation3/>
        }
    };
    const handleFund1Click = (e) => {
        e.preventDefault();
        setFund1Active(true);
        setFund2Active(false);
        setFund3Active(false);
        setFund1Class("show-border");
        setFund2Class("");
        setFund3Class("");
    };
    const handleFund2Click = (e) => {
        e.preventDefault();
        setFund1Active(false);
        setFund2Active(true);
        setFund3Active(false);
        setFund1Class("");
        setFund2Class("show-border");
        setFund3Class("");
    };
    const handleFund3Click = (e) => {
        e.preventDefault();
        setFund1Active(false);
        setFund2Active(false);
        setFund3Active(true);
        setFund1Class("");
        setFund2Class("");
        setFund3Class("show-border");
    };


    return (
        <>
            <p className="fund-info">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </p>
            {listOfFoundations()}
            <div className="numbers-buttons">
                <button className={fund1Class} onClick={handleFund1Click}>1</button>
                <button className={fund2Class} onClick={handleFund2Click}>2</button>
                <button className={fund3Class} onClick={handleFund3Click}>3</button>
            </div>
        </>
    )
};

export default FoundationsContainer;