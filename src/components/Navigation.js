import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <ul>
            <li>
                <NavLink activeClassName="active" exact to="/" > Home</NavLink>
            </li>
        </ul>
    )
};

export default Navigation;