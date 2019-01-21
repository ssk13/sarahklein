import axios from 'axios';
import books from '../assets/goodreadsBooks.xml';
import bookData from '../assets/bookData.json';

const apiKey = '05VzMTV0rAKoDt0jXZohg';
const myUserId = '4901618';

export function getLast50StoredBooks() {
    return(fetch(books)
    .then(response => response.text())
    .then(text => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        return xmlToJson(xml).GoodreadsResponse.reviews.review;
    }));
}

export function getLatestBookData() {
    return bookData;
}

export function getLast200Books() {
    const url = 'http://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/' + myUserId + '.xml?key=' + apiKey + '&v=2&shelf=read&per_page=50page=1&sort=date_read&order=d';
    return (
        axios.get(url)
        .then(data => 
            {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data.data, 'text/xml');
                return xmlToJson(xml).GoodreadsResponse.reviews.review;
            })
        .catch(err=>console.log(err))
    );
};

export function getAuthorInfo(authorId) {
    const url = 'http://cors-anywhere.herokuapp.com/https://www.goodreads.com/author/show.xml?key=' + apiKey + '&id=' + authorId;
    return (
        axios.get(url)
        .then(data => 
            {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data.data, 'text/xml');
                return xmlToJson(xml).GoodreadsResponse.author;
            })
        .catch(err=>console.log(err))
    );
};

export function getBookInfo(bookId) {
    const url = 'http://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show?key=' + apiKey + '&id=' + bookId;
    return (
        axios.get(url)
        .then(data => 
            {
                const parser = new DOMParser();
                const xml = parser.parseFromString(data.data, 'text/xml');
                return xmlToJson(xml).GoodreadsResponse.book;
            })
        .catch(err=>console.log(err))
    );
};

var xmlToJson = function (xml) {
    var obj = {};
    if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) { 
        obj = xml.nodeValue;
    }            
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};
