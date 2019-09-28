import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <header>
            { props.routes.map( route => {
                return <NavLink
                    key={route.id}
                    to={route.path}>{route.name}
                </NavLink>
            })}
        </header>
    )
}

export default Navigation;