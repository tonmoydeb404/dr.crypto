/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import CardSkeleton from '../components/CardSkeleton';
import CryptoCard from '../components/CryptoCard';
import SkeletonScreen from '../components/SkeletonScreen';
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
        return (
            <SkeletonScreen className="crypto_card-layout" count={15}>
                <CardSkeleton header />
            </SkeletonScreen>
        );
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
        <SkeletonScreen className="crypto_card-layout" count={15}>
            <CardSkeleton header />
        </SkeletonScreen>
    );
};

export default Search;
