import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchContext } from '../context/SearchContext';

const SearchBox = ({ className = '' }) => {
    const [showSearch, setShowSearch] = useState(false);
    const { query, setQuery } = useSearchContext();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        // navigate to search page
        if (typeof query === 'string' && !query.length) {
            navigate('/');
        } else {
            navigate(`/search/?query=${query}`);
        }
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
