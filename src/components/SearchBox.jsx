import React, { useState } from 'react';

const SearchBox = ({ className = '' }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`search_box-container ${className} ${showSearch ? 'show_search' : ''}`}>
            <form className={`search_box `} onSubmit={handleSearch}>
                <input
                    type="search"
                    className="search_box-field"
                    placeholder="search here..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search_box-btn" type="submit">
                    Search
                </button>
            </form>

            <button
                className={`search_box-toggle ${showSearch ? 'bg-red-600' : 'bg-blue-600'}`}
                onClick={() => setShowSearch(!showSearch)}
            >
                <i className={`bi ${showSearch ? 'bi-x-lg' : 'bi-search'}`} />
            </button>
        </div>
    );
};

export default SearchBox;
