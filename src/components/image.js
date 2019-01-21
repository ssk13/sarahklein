import React, { Component } from 'react';

import './style/image.css';

class Image extends Component {
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
                 
                {this.props.hasCaption && 
                <div className='caption'>
                    <span>{this.props.altTxt}</span>
                </div>                
                }

            </div>
        );
    }
}

export default Image;
