import React, { Component } from 'react';
import { getLast50StoredBooks, getLatestBookData } from '../clients/goodreads';
import Book from '../components/book';
import FictionData from './fictionData';
import GenderData from './genderData';
import HometownData from './hometownData';

import './style/bookData.css';

class BookData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: '',
            genderData: [],
            hometownData: [],
            hometownColors: [],
            fictionData: []
        }
    }

    async componentDidMount() {
        var books = [];
        var bookInfo = getLatestBookData();

        this.setState({
            genderData: bookInfo[0].gender,
            hometownData: bookInfo[0].hometowns,
            fictionData: bookInfo[0].genre
        });
        
        getLast50StoredBooks().then(data => {
            if (data) {
                data.forEach(book => {
                    var dateRead = book.read_at['#text'];
                    if (!dateRead) {
                        dateRead = book.date_updated['#text'];
                    }
                    dateRead = dateRead.substring(0,10);
    
                    var title = book.book.title['#text'].substring(0,40);
                    if (title !== book.book.title['#text']) {
                        title = title.concat('...')
                    }
    
                    books.push(<Book imgSrc={book.book.image_url['#text']} altTxt={book.book.title['#text']} 
                        title={title}
                        author={book.book.authors.author.name['#text']}
                        dateRead={dateRead}
                        key={book.book.isbn['#text']}
                    />)
                })
            }

            this.setState({
                bookList: books
            });  
        });
   
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className={'tableContainer'}>
                                <div className={'booksContainer'}>
                                    {this.state.bookList}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <GenderData genderData={this.state.genderData} />

                <FictionData fictionData={this.state.fictionData} />

                <HometownData hometownData={this.state.hometownData} />

            </div>

        );
    }
}

export default BookData;
