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

                <div className='bookInfo'>
                    <p>{this.props.title}</p>
                    <p>{this.props.author}</p>
                    <p className='dateRead'>{this.props.dateRead}</p>
                </div>

            </div>
        );
    }
}

export default Book;
