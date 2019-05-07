import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation"
import Home from "./components/Home"
import SubNavigation from "./components/SubNavigation"

import macBookImage from "./images/MacBook.svg";
import iMacImage from "./images/iMac.svg";

const navItems = ["Home", "Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"]
const subNavItems = 
  [
    {
      category: "mac",
      items: [
        {
          name: "MacBook",
          image: macBookImage
        },
        {
          name: "iMac",
          image: iMacImage
        }
      ]
    },
  ]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateNavItems: navItems,
      stateSubNavItems: subNavItems
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation items={this.state.stateNavItems}/>
        <Route exact path="/" component={Home} />
        {this.state.stateSubNavItems.map(element =>
          <Route 
            path={`/${element.category}`} 
            render={ (routeProps) => (
              <SubNavigation {...routeProps} items={element.items} />
            )}
          />
        )}
      </div>
    );
  }
}

export default App;
