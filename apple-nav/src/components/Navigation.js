import React from 'react';
import './Navigation.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavItem from "./NavItem"

function Navigation(props) {
  return (
    <div className="navigation">
        {props.items.map(item => 
            <NavItem item={item}/>    
        )}
    </div>
  );
}

export default Navigation;
