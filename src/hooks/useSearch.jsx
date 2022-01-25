import { useEffect, useState } from 'react';
import cryptoAPI from '../api/cryptoAPI';

const useSearch = (query = '') => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchCoins = async () => {
            if (typeof query === 'string' && query !== undefined && query.length > 0) {
                try {
                    setLoading(true);
                    setError(false);
                    const results = await cryptoAPI.get(`/search?query=${query}`);

                    setData({ ...results.data });
                    setLoading(false);
                } catch (err) {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                }
            }
        };

        fetchCoins();

        return () => {
            setData({});
            setLoading(true);
            setError(false);
        };
    }, [query]);

    return { searchLoading: loading, searchError: error, searchData: data };
};

export default useSearch;
