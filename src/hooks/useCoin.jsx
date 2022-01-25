import { useEffect, useState } from 'react';
import cryptoAPI from '../api/cryptoAPI';

const useCoin = (id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [coin, setCoin] = useState({});

    useEffect(() => {
        const fetchCoins = async () => {
            if (typeof id === 'string') {
                try {
                    setLoading(true);
                    setError(false);
                    const results = await cryptoAPI.get(`coins/${id}`, {
                        params: {
                            localization: false,
                            tickers: false,
                            market_data: true,
                            community_data: false,
                            developer_data: false,
                            sparkline: true,
                        },
                    });

                    setCoin(results.data);
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
            setCoin({});
            setLoading(true);
            setError(false);
        };
    }, [id]);

    return { coinLoading: loading, coinError: error, coin };
};

export default useCoin;
