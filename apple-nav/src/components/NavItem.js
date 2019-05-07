import React from 'react';
import './Navigation.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavItem(props) {
    console.log("Nav-item", props);
  return (
    <div className="nav-item">
        <Link 
            className="item" 
            to={props.item === "Home" ? "/" : props.item.toLowerCase()}
        >
            {props.item}
        </Link>
    </div>
  );
}

export default NavItem;
