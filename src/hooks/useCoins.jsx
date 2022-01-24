import { useEffect, useState } from 'react';
import cryptoAPI from '../api/cryptoAPI';

const useCoins = (page) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [coins, setCoins] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            if (page > 0) {
                try {
                    setLoading(true);
                    setError(false);
                    const results = await cryptoAPI.get('/coins/markets', {
                        params: {
                            vs_currency: 'usd',
                            order: 'market_cap_desc',
                            per_page: 100,
                            page,
                            sparkline: true,
                        },
                    });
                    if (results.data) {
                        setCoins((prevState) => [...prevState, ...results.data]);
                    } else {
                        setHasMore(false);
                    }
                    setLoading(false);
                } catch (err) {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                }
            }
        };

        fetchCoins();

        // return () => {
        //     setCoins([]);
        //     setLoading(true);
        //     setError(false);
        //     setHasMore(true);
        // };
    }, [page]);

    return { coinsLoading: loading, coinsError: error, coins, hasMore };
};

export default useCoins;
