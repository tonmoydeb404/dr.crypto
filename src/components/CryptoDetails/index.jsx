import React from 'react';
import CryptoDetailsDesc from './CryptoDetailsDesc';
import CryptoDetailsHeader from './CryptoDetailsHeader';
import CryptoDetailsSparks from './CryptoDetailsSparks';

const CryptoDetails = ({
    className = '',
    title = null,
    icon = null,
    changes = null,
    priceHigh = null,
    priceLow = null,
    currentPrice = null,
    marketCap = null,
    text = null,
    sparks = null,
}) => (
    <div className={`crypto_details ${className}`}>
        <CryptoDetailsHeader
            title={title}
            icon={icon}
            changes={changes}
            priceHigh={priceHigh}
            priceLow={priceLow}
            currentPrice={currentPrice}
            marketCap={marketCap}
        />

        <CryptoDetailsSparks data={sparks} />

        <CryptoDetailsDesc text={text} />
    </div>
);

export default CryptoDetails;
