import React, { Component } from 'react';
import BookData from '../components/bookData';

import './style/reader.css'

class Reader extends Component {
    render() {
        return (
            <div>
                <h2>What I Read</h2>

                <p>
                    From an early age, I've been an avid reader. Sometime in 2015, I realized that I did not 
                    read from a very diverse authorship, and to fix this, I built a tool that used the 
                    <a href="https://www.goodreads.com/"> Goodreads</a> APIs to help me see trends in what I was 
                    reading. In the future, this tool will recommend me books from my 'to-read' shelf that help 
                    fill in underrepresented categories.
                </p>

                <div>                
                    <h3>What I've Read Lately</h3>
                    <BookData userId = '4901618' />
                </div>

            </div>
        );
    }
}
 
export default Reader;
