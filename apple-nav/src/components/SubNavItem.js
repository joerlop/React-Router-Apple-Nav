import React from 'react';
import './Navigation.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function SubNavItem(props) {
  return (
    <div className="sub-nav-item">
        <img src={props.item.image} />
        <p>{props.item.name}</p>
    </div>
  );
}

export default SubNavItem;