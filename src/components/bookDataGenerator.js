import React, { Component } from 'react';
import { getAuthorInfo, getLast200Books, getBookInfo } from '../clients/goodreads';
import { mapHometown } from '../clients/homeTownMap';
import { getRandomColor } from '../clients/style';
import Book from './book';
import FictionData from './fictionData';
import GenderData from './genderData';
import HometownData from './hometownData';

import './style/bookData.css';

class BookDataGenerator extends Component {
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

        getLast200Books(this.props.userId).then(data => {
            var maleCount = 0;
            var femaleCount = 0;
            var fictionCount = 0;
            var nonFictionCount = 0;
            var hometownDict = {};

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
    
                    var authorId = book.book.authors.author.id['#text'];
                    getAuthorInfo(authorId).then(authorData => {
                        if (authorData.gender['#text'] === 'male') {
                            maleCount += 1;
                        }
                        else if (authorData.gender['#text'] === 'female') {
                            femaleCount += 1;
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
                                if (hometownDict[homeTown]) {
                                    hometownDict[homeTown] += 1;
                                }
                                else {
                                    hometownDict[homeTown] = 1;
                                }
                            }
                        }
    
                        var hometownArray = [];
                        var colorIndex = 0;
                        for (var key in hometownDict) {
                            var item = {};
                            item.title = key;
                            item.value = hometownDict[key];
                            if (colorIndex < this.state.hometownColors.length) {
                                item.color = this.state.hometownColors[colorIndex]
                            }
                            else {
                                item.color = getRandomColor();
                                var newColorArray = this.state.hometownColors;
                                newColorArray.push(item.color)
                                this.setState({
                                    hometownColors: newColorArray
                                })
                            }
                            colorIndex += 1;
                            hometownArray.push(item);
                        }
    
                        this.setState({
                            genderData: [
                                { title: 'Male', value: maleCount, color: '#E38627' },
                                { title: 'Female', value: femaleCount, color: '#C13C37' },
                            ],
                            hometownData: hometownArray
                        });
                        //TODO: Export to XML file
                        var bookData = {
                            "hometowns": this.state.hometownData,
                            "gender": this.state.genderData,
                            "genre": this.state.fictionData
                        };
            
                        console.log(bookData);
                    });
    
                    var bookId = book.book.id['#text'];
                    getBookInfo(bookId).then(bookData => {
                        var shelves = bookData.popular_shelves.shelf;
                        var shelfAssigned = false;
                        shelves.forEach(shelf => {
                            if (shelf['@attributes']['name'] === 'non-fiction') {
                                nonFictionCount += 1;
                                shelfAssigned = true;
                            }
                            else if (shelf['@attributes']['name'] === 'fiction') {
                                fictionCount += 1;
                                shelfAssigned = true;
                            }
                        })
    
                        if (!shelfAssigned) {
                            // TO-DO: send-email
                        }
    
                        this.setState({
                            fictionData: [
                                { title: 'Fiction', value: fictionCount, color: '#E38627' },
                                { title: 'Non-Fiction', value: nonFictionCount, color: '#C13C37' },
                            ]
                        });
                        //TODO: Export to XML file
                        var bookData = {
                            "hometowns": this.state.hometownData,
                            "gender": this.state.genderData,
                            "genre": this.state.fictionData
                        };
            
                        console.log(bookData);
                    })
                });
            }

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

                <FictionData fictionData={this.state.fictionData} />

                <HometownData hometownData={this.state.hometownData} />

            </div>

        );
    }
}

export default BookDataGenerator;
