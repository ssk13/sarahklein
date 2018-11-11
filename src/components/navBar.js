import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style/navBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'developer'
        }
    }

    getClassName(pageName) {
        if (this.state.activePage === pageName) {
            return 'active';
        }
        return '';
    }

    render() {
        return (
            <ul className="header">
                <li className={this.getClassName('developer')}>
                    <NavLink to="/developer" onClick={() => {this.setState({activePage: 'developer'})}}>Developer</NavLink>
                </li>
                <li className={this.getClassName('musician')}>
                    <NavLink to="/musician" onClick={() => {this.setState({activePage: 'musician'})}}>Musician</NavLink>
                </li>
                <li className={this.getClassName('photographer')}>
                    <NavLink to="/photographer" onClick={() => {this.setState({activePage: 'photographer'})}}>Photographer</NavLink>
                </li>
            </ul>
        );
    }
}

export default NavBar;
