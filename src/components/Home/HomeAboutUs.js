import React, {useEffect, useState} from 'react';
import signature from '../../assets/Signature.svg'

const HomeAboutUs = () => {

    return (
        <article className="home-about-us">
            <section className="about-us-text">
                <h2>O nas</h2>
                <div className="decoration"> </div>
                <p>
                    In auctor vulputate elit, a tincidunt mauris semper ac. Nullam at augue malesuada, iaculis lorem quis, pulvinar mi. Ut nec turpis velit. Mauris rutrum sem eget dignissim ornare.
                </p>
                <div className="about-us-signature">
                    <img alt="signature" src={signature} />
                </div>
            </section>
            <section className="about-us-background"></section>
        </article>
    )
};

export default HomeAboutUs;