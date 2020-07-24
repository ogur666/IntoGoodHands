import React from 'react';
import {Link} from "react-router-dom";

const HomeHeader = ({user}) => {

    const handleCheckLogin = () => {
        return (user != null) ?
            <p className="buttons">
                <Link to="/oddaj-rzeczy">ODDAJ RZECZY</Link>
                <Link to="/oddaj-rzeczy">ZORGANIZUJ ZBIÓRKĘ</Link>
            </p>
            : <p className="buttons">
                <Link to="/logowanie">ODDAJ RZECZY</Link>
                <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
            </p>
    };

    return (
        <article className="home-start">
            <section className="start-background"> </section>
            <section className="start-info">
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className="decoration"> </div>
                <>
                    {handleCheckLogin()}
                </>
            </section>
        </article>
    )
};

export default HomeHeader;