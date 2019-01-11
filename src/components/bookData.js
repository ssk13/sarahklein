import React, { Component } from 'react';
import { getAuthorInfo, getLast200Books } from '../clients/goodreads';
import Book from '../components/book';
import GenderData from './genderData';

import './style/bookData.css';

class BookData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: '',
            genderData: [
                { title: 'Male', value: 1, color: '#E38627' },
                { title: 'Female', value: 1, color: '#C13C37' },
                { title: 'Unknown', value: 1, color: '#6A2135' },
            ]        }
    }

    async componentDidMount() {
        var books = [];

        getLast200Books(this.props.userId).then(data => {
            var maleCount = 1;
            var femaleCount = 1;
            var unknownCount = 1;
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

                var authorId = book.book.authors.author.id['#text'];
                getAuthorInfo(authorId).then(authorData => {
                    if (authorData.gender['#text'] === 'male') {
                        maleCount += 1;
                    }
                    else if (authorData.gender['#text'] === 'female') {
                        femaleCount += 1;
                    }
                    else {
                        unknownCount += 1;
                    }

                    this.setState({
                        genderData: [
                            { title: 'Male', value: maleCount, color: '#E38627' },
                            { title: 'Female', value: femaleCount, color: '#C13C37' },
                            { title: 'Unknown', value: unknownCount, color: '#6A2135' },
                        ]
                    });
                });
            });

            this.setState({
                bookList: books
            });

            return books;
        })
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

            </div>

        );
    }
}

export default BookData;
