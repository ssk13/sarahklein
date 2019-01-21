import React, { Component } from 'react';

import './style/image.css';

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            captionVisible: false
        }
    }

    getHeight(size) {
        return 20 * size;
    }

    getImageStyle() {
        if (!this.props.float) {
            return;
        }

        return {float: this.props.float}
    }

    render() {
        return (
            <div className='image' style={this.getImageStyle()}>
                <img
                    src={this.props.imgSrc}
                    alt={this.props.altTxt}
                    height={this.getHeight(this.props.size)}
                />
                 
                <div className='caption'>
                    <span>{this.props.altTxt}</span>
                </div>
            </div>
        );
    }
}

export default Image;
