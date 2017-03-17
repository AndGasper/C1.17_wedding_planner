import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavLink = (props) => {
    const { index, ...rest } = props;
    if(index){
        return (
            <IndexLink {...rest} className="nav-link" />
        )
    }
    return (
        <Link {...rest} className="nav-link" />
    )
};

export default NavLink;