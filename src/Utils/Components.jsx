import React from 'react';
import { Link } from "react-router-dom";

const LinkSidebar = ({ linkIcon, text, link }) => {
    return (
        <Link to={`/${link}`} className="sidebar__category">
            <i className="material-icons">
                {linkIcon}
            </i>
            <span>{text}</span>
        </Link>
    );
}

export {LinkSidebar};
