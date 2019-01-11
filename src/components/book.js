import React, { Component } from 'react';

import './style/book.css';

class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className='book'>
                <img src={this.props.imgSrc} alt={this.props.altTxt} />
                 
                <p>{this.props.title}</p>
                <p>{this.props.author}</p>
                <p>{this.props.dateRead}</p>
            </div>
        );
    }
}

export default Book;
