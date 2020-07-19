import React from 'react';
import {Link} from "react-router-dom";

const HomeHeader = () => {

    return (
        <article className="home-start">
            <section className="start-background"> </section>
            <section className="start-info">
                <p>Zacznij pomagać!</p>
                <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className="decoration"> </div>
                <p className="buttons">
                    <Link to="/logowanie">ODDAJ RZECZY</Link>
                    <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
                </p>
            </section>
        </article>
    )
};

export default HomeHeader;