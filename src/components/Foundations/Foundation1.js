import React from 'react';

const Foundation1 = () => {

    return (
        <>
            <div className="fund-item">
                <p>
                    <span className="fund-name">Fundacja "Dbam o zdrowie"</span>
                    <span className="fund-mission">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</span>
                </p>
                <p className="fund-need">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
            </div>
            <div className="fund-item">
                <p>
                    <span className="fund-name">Fundacja “Dla dzieci”</span>
                    <span className="fund-mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</span>
                </p>
                <p className="fund-need">ubrania, meble, zabawki</p>
            </div>
            <div className="fund-item">
                <p>
                    <span className="fund-name">Fundacja “Bez domu”</span>
                    <span className="fund-mission">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</span>
                </p>
                <p className="fund-need">ubrania, jedzenie, ciepłe koce</p>
            </div>
        </>
    )
};

export default Foundation1;