import React, { createContext, useContext, useState } from 'react';
import { useMemo } from 'react/cjs/react.development';

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [query, setQuery] = useState('');

    const data = useMemo(() => ({ query, setQuery }), [query]);

    return <SearchContext.Provider value={data}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
