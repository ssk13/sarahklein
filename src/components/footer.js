import React, { Component } from 'react';

import './style/footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'home'
        }
    }

    getClassName(pageName) {
    }

    render() {
        return (
            <div className='footer'>
                <table>
                    <tbody>
                        <tr>
                            <td><a href='mailto:405sarah@gmail.com'>405sarah@gmail.com</a></td>
                            <td><a href='https://github.com/ssk13' target='_blank' rel='noopener noreferrer'>Github</a></td>
                        </tr>
                        <tr>
                            <td><a href='https://www.flickr.com/people/165927958@N03/' target='_blank' rel='noopener noreferrer'>Flickr</a></td>
                            <td><a href='https://www.linkedin.com/in/kleinsarah/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></td>
                        </tr>
                    </tbody>
                </table>
                <center>
                    <p>&#9400; Sarah Klein</p>
                </center>
            </div>
        );
    }
}

export default Footer;
