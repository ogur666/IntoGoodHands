import React from 'react';

const Foundation2 = () => {

    return (
        <>
            <div className="fund-item">
                <p>
                    <span className="fund-name">Fundacja "Lorem Ipsum"</span>
                    <span className="fund-mission">Cel i misja: Pomoc programistom w pisaniu kodu</span>
                </p>
                <p className="fund-need">pizza, kawa, pepsi</p>
            </div>
            <div className="fund-item">
                <p>
                    <span className="fund-name">Fundacja “Pomoc kotkom”</span>
                    <span className="fund-mission">Cel i misja: Pomoc bezdomnym kotkom.</span>
                </p>
                <p className="fund-need">koce, kocia karma, myszki</p>
            </div>
            <div className="fund-item">
                <p>
                    <span className="fund-name">Fundacja “Pomoc pieskom”</span>
                    <span className="fund-mission">Cel i misja: Pomoc bezdomnym pieskom.</span>
                </p>
                <p className="fund-need">koce, jedzenie</p>
            </div>
        </>
    )
};

export default Foundation2;