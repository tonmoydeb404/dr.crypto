import React from 'react';
import { useParams } from 'react-router-dom';
import CardDetailsSkeleton from '../components/CardDetailsSkeleton';
import CryptoDetails from '../components/CryptoDetails';
import useCoin from '../hooks/useCoin';

const Crypto = () => {
    const { id } = useParams();
    const { coin, coinError, coinLoading } = useCoin(id);

    console.log(id);

    if (coinLoading && !coinError && !coin) {
        return <CardDetailsSkeleton />;
    }

    if (!coinLoading && coinError && !coin) {
        return 'somthing went to wrong';
    }

    return typeof coin === 'object' && Object.keys(coin).length ? (
        <CryptoDetails
            title={coin.name}
            icon={coin.image.large}
            changes={parseFloat(coin.market_data.price_change_percentage_24h)}
            priceHigh={parseFloat(coin.market_data.high_24h.usd)}
            priceLow={parseFloat(coin.market_data.low_24h.usd)}
            currentPrice={parseFloat(coin.market_data.current_price.usd)}
            marketCap={parseFloat(coin.market_data.market_cap.usd)}
            text={coin.description.en}
            sparks={coin.market_data.sparkline_7d.price}
        />
    ) : (
        <CardDetailsSkeleton />
    );
};

export default Crypto;
