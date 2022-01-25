import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import CryptoCard from '../components/CryptoCard';
import useCoins from '../hooks/useCoins';

const Home = () => {
    const [page, setPage] = useState(1);

    const { coinsLoading, coinsError, hasMore, coins } = useCoins(page);

    if (coinsLoading && !coinsError && !coins) {
        return 'loading...';
    }

    if (!coinsLoading && coinsError && !coins) {
        return 'somthing went to wrong';
    }

    return coins.length ? (
        <InfiniteScroll
            className="crypto_card-layout"
            dataLength={coins.length}
            hasMore={hasMore}
            next={() => setPage((prevState) => prevState + 1)}
            loader={<h3>loading</h3>}
            endMessage={<p>end</p>}
        >
            {coins.map((coin) => (
                <Link key={coin.id} to={`/${coin.id}`} className="block">
                    <CryptoCard
                        icon={coin.image}
                        title={coin.name}
                        rank={coin.market_cap_rank}
                        changes={parseFloat(coin.price_change_percentage_24h)}
                        price={parseFloat(coin.current_price)}
                        marketcap={parseFloat(coin.market_cap)}
                    />
                </Link>
            ))}
        </InfiniteScroll>
    ) : (
        ''
    );
};

export default Home;
