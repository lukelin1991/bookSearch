import React from 'react'

export const SearchBar = (props) => {
    const { updateInput, searchInput, fetchBooks } = props

    const handleChange = (event) => {
        updateInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchBooks()
    }

    return(
        <div className="search">
            <form onSubmit={handleSubmit}> 
                <input className="form-control sb" placeholder="Search our books" value={searchInput} onChange={handleChange} />
                <button>Search</button>
            </form>
        </div>
    )
}