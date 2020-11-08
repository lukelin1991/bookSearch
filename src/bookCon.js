import React from 'react'
import { Book } from './Book'


export const BookCon = ({ books }) => {
    const bookList = books.data
    const mapBooks = () => {
        return bookList.map(book => {
            return <Book key={book.id} book={book}/>
        })
    }
    console.log(books)
    return (
        <div className="book-con">
            <h2 className="title">Please enjoy our selection of books!</h2>
            <div className="book-map">
                {mapBooks()}
            </div>
        </div>
    )
}