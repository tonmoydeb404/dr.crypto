/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import CryptoCard from '../components/CryptoCard';
import useSearch from '../hooks/useSearch';

const Search = () => {
    const [searchParam] = useSearchParams();
    const query = searchParam.get('query');
    const { searchData, searchLoading, searchError } = useSearch(query);
    const navigate = useNavigate();

    if (typeof query === 'string' && !query.length) {
        navigate('/');
    }

    if (searchLoading && !searchError && !searchData) {
        return 'loading...';
    }

    if (!searchLoading && searchError && !searchData) {
        return 'somthing went to wrong';
    }

    return searchData.coins && searchData.coins.length ? (
        <div className="crypto_card-layout">
            {searchData.coins.map((coin) => (
                <Link key={coin.id} to={`/${coin.id}`} className="block">
                    <CryptoCard
                        className="single"
                        icon={coin.large}
                        title={coin.name}
                        rank={coin.market_cap_rank}
                    />
                </Link>
            ))}
        </div>
    ) : (
        ''
    );
};

export default Search;
