import React, { Component } from 'react';
import { getAuthorInfo, getLast200StoredToReadBooks, getBookInfo, getLatestBookData } from '../clients/goodreads';
import { mapHometown } from '../clients/homeTownMap';
import Book from './book';

import './style/bookData.css';

class BookRecommendations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booksArray: [],
            bookList: ''
        }
    }

    async scoreBooks() {
        var topScoreBooks = [];
        var bookInfo = getLatestBookData();
        var malePoints;
        var femalePoints;
        var fictionPoints;
        var nonFictionPoints;
        var hometownPoints = 1;
        if (bookInfo[0].gender[0].value > bookInfo[0].gender[1].value) {
            malePoints = -1;
            femalePoints = 1;
        }
        else {
            malePoints = 1;
            femalePoints = -1;          
        }

        if (bookInfo[0].genre[0].value > bookInfo[0].genre[1].value) {
            nonFictionPoints = -1;
            fictionPoints = 1;
        }
        else {
            nonFictionPoints = 1;
            fictionPoints = -1;          
        }

        getLast200StoredToReadBooks().then(data => {
            if (data) {
                data.forEach(book => {    
                    var score = 0;
                    var authorId = book.book.authors.author.id['#text'];
                    getAuthorInfo(authorId).then(authorData => {
                        if (authorData) {
                            if (authorData.gender['#text'] === 'male') {
                                score += malePoints
                            }
                            else if (authorData.gender['#text'] === 'female') {
                                score += femalePoints;
                            }
                            else {
                                // TO-DO: send an e-mail        
                            }
        
                            var homeTown = authorData.hometown['#text'];
                            if (homeTown) {
                                homeTown = mapHometown(homeTown.split(',').pop().trim());

                                if (homeTown.includes('UNIDENTIFIED')) {
                                    // TO-DO: send an e-mail with value to add it to the map
                                    console.log(authorData.hometown['#text']);
                                }
                                else {
                                    var found = bookInfo[0].hometowns.find(function(element) {
                                        return element["title"] === homeTown;
                                    });
                                    if (found) {
                                        score -= hometownPoints;
                                    }
                                    else {
                                        score += hometownPoints;
                                    }
                                }
                            }

                            var bookId = book.book.id['#text'];
                            getBookInfo(bookId).then(bookData => {
                                if (bookData) {
                                    var shelves = bookData.popular_shelves.shelf;
                                    shelves.forEach(shelf => {
                                        if (shelf['@attributes']['name'] === 'non-fiction') {
                                            score += nonFictionPoints;
                                        }
                                        else if (shelf['@attributes']['name'] === 'fiction') {
                                            score += fictionPoints;
                                        }
                                    })

                                    var title = book.book.title['#text'].substring(0,40);
                                    if (title !== book.book.title['#text']) {
                                        title = title.concat('...')
                                    }

                                    topScoreBooks = this.state.booksArray;
                                    var bookObject = <Book
                                        imgSrc={book.book.image_url['#text']}
                                        altTxt={book.book.title['#text']} 
                                        title={title}
                                        author={book.book.authors.author.name['#text']}
                                        key={book.book.isbn['#text']}
                                        link={book.book.link['#text']}
                                    />
                                    console.log(bookObject);
                                    console.log("Score:")
                                    console.log(score);
                                    if (score > 1) {
                                        console.log('score top')
                                        topScoreBooks.push(bookObject)
                                        this.setState({
                                            booksArray: topScoreBooks
                                        });
                                        console.log(topScoreBooks);
                                    }
                                }
                            });
                        }
                    });
                });
            }
        })
    }


    getBooksArray(data) {
        var books = [];
        data.forEach(book => {
            books.push(<Book
                imgSrc={book.imgSrc}
                altTxt={book.altTxt} 
                title={book.title}
                author={book.author}
                link={book.link}
            />)
        })
        return books;
    }

    render() {
        return (
            <div>
                <h3>Recommendations</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className={'tableContainer'}>
                                <div className={'booksContainer small'}>
                                    {this.getBooksArray(this.props.bookData)}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BookRecommendations;
