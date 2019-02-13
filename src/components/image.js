import React, { Component } from 'react';

import './style/image.css';

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth
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

    getHeight(size) {
        var isMobile = this.state.width <= 500;
        if (isMobile) {
            return 'auto';
        }
        return 20 * size;
    }

    getWidth() {
        var isMobile = this.state.width <= 500;
        if (isMobile) {
            return '80%';
        }
        return 'auto';
    }

    getImageStyle() {
        var isMobile = this.state.widthwidth <= 500;

        if (isMobile || !this.props.float) {
            return;
        }

        return {float: this.props.float}
    }

    render() {
        return (
            <div
                className='image'
                style={this.getImageStyle()}
                height={this.getHeight(this.props.size)}
                width={this.getWidth()} >
                <img
                    src={this.props.imgSrc}
                    alt={this.props.altTxt}
                    height={this.getHeight(this.props.size)}
                    width={this.getWidth()}
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
