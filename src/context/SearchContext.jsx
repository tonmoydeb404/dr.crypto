import React, { createContext, useContext, useMemo, useState } from 'react';

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [query, setQuery] = useState('');

    const data = useMemo(() => ({ query, setQuery }), [query]);

    return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
