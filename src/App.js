import React, { useState } from 'react'
import axios from 'axios'
import { BookCon } from './bookCon'
import { SearchBar } from './SearchBar'
import "./App.css"
import "./book.css"


export const App = () => {
  const [books, setBooks] = useState({ready: false, data: []})
  const [searchInput, setInput] = useState('')

  const handleResponse = (response) => [
    setBooks({ready: true, data: response.data.list})
  ]

  const fetchBooks = () => {
    const apiUrl = `https://goodreads-server-express--dotdash.repl.co/search/${searchInput}`
    axios.get(apiUrl).then(handleResponse)
  }

  const updateInput = (newInput) => {
    setInput(newInput)
  }

  return (
    <div className="App">
      {console.log(searchInput)}
      <h1 className="title">Welcome to the BookSearch!</h1>
      <hr/>
      <SearchBar searchInput={searchInput} updateInput={updateInput} fetchBooks={fetchBooks} />
      <BookCon books={books}/>
    </div>
  );
}

export default App;
