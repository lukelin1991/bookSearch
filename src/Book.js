import React from 'react'

export const Book = ({ book }) => {
    const {imageUrl, title, authorName } = book
    return (
        <div className="book">
            <img className="book-img" src={imageUrl} alt="book pic"/>
            <h5> Title: {title}</h5>
            <h5> Author: {authorName}</h5>
        </div>
    )
}