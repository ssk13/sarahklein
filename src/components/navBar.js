import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { NavLink } from 'react-router-dom';
import Resume from '../assets/Resume.pdf';

import './style/navBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'developer',
            width: window.innerWidth,
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    getClassName(pageName) {
        var className = pageName;
        
        if (this.state.activePage === pageName) {
            className += ' active'
        }
        return className;
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return (
                <Menu>
                    <NavLink className={this.getClassName('developer')} to="/developer" onClick={() => {this.setState({activePage: 'developer'})}}>Developer</NavLink>
          
                    <NavLink className={this.getClassName('musician')} to="/musician" onClick={() => {this.setState({activePage: 'musician'})}}>Musician</NavLink>

                    <NavLink className={this.getClassName('photographer')} to="/photographer" onClick={() => {this.setState({activePage: 'photographer'})}}>Photographer</NavLink>
          
                    <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
              </Menu>
            )
        }
        else {
            return (
                <ul className="header">
                    <li>
                        <NavLink className={this.getClassName('developer')} to="/developer" onClick={() => {this.setState({activePage: 'developer'})}}>Developer</NavLink>
                    </li>
                    <li>
                        <NavLink className={this.getClassName('musician')} to="/musician" onClick={() => {this.setState({activePage: 'musician'})}}>Musician</NavLink>
                    </li>
                    <li>
                        <NavLink className={this.getClassName('photographer')} to="/photographer" onClick={() => {this.setState({activePage: 'photographer'})}}>Photographer</NavLink>
                    </li>
                    <li className={this.getClassName('resume')}>
                        <a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a>
                    </li>
                </ul>
            );
        }
    }
}

export default NavBar;
