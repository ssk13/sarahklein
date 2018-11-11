import React, { Component } from 'react';

import './style/imageRow.css';

class ImageRow extends Component {

    render() {
        return (
            <div>
                <div className='row'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ImageRow;
