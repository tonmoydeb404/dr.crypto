import { useEffect, useState } from 'react';
import cryptoAPI from '../api/cryptoAPI';

const useCoinsList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                setLoading(true);
                setError(false);
                const results = await cryptoAPI.get('/coins/list');

                setCoins([...results.data]);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        };

        fetchCoins();

        return () => {
            setCoins([]);
            setLoading(true);
            setError(false);
        };
    }, []);

    return { coinsListLoading: loading, coinsListError: error, coinsList: coins };
};

export default useCoinsList;
