import React from 'react';
import './Navigation.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SubNavItem from "./SubNavItem"

function SubNavigation(props) {
  return (
      <div className="sub-navigation">
            {props.items.map(element => 
                <SubNavItem item={element} />    
            )}
      </div>
  );
}

export default SubNavigation;