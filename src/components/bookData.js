import React, { Component } from 'react';
import { getLast200Books } from '../clients/goodreads';
import Book from '../components/book';


class BookData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: ''
        }
    }

    async componentDidMount() {
        var books = [];

        getLast200Books().then(data => {
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
            });
            this.setState({
                bookList: books
            });
            return books;
        })
    }

    render() {
        return (
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
        );
    }
}

export default BookData;
