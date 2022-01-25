import React from 'react';

const CryptoDetailsHeader = ({
    className = '',
    title = null,
    icon = null,
    changes = null,
    priceHigh = null,
    priceLow = null,
    currentPrice = null,
    marketCap = null,
}) => (
    <div className={`crypto_details-header ${className}`}>
        <div className="crypto_details-title ">
            {icon ? <img src={icon} alt={title} className="crypto_details-icon " /> : ''}
            <div className="">
                {title ? <h2 className="crypto_details-title-text ">{title}</h2> : ''}
                {changes ? (
                    <h3
                        className={`crypto_details-title-changes ${
                            Math.sign(changes) === 1 ? 'text-green-600' : 'text-red-600'
                        } `}
                    >
                        {Math.sign(changes) === 1
                            ? `+${changes.toFixed(2)}%`
                            : `${changes.toFixed(2)}%`}
                    </h3>
                ) : (
                    ''
                )}
            </div>
        </div>

        <div className="crypto_details-price">
            {priceHigh ? (
                <span className="crypto_details-price-high ">
                    <i className="bi bi-arrow-up" /> ${priceHigh}
                </span>
            ) : (
                ''
            )}
            {priceLow ? (
                <span className="crypto_details-price-low text-red-600 font-medium text-base">
                    <i className="bi bi-arrow-down" /> ${priceLow}
                </span>
            ) : (
                ''
            )}
        </div>

        <div className="crypto_details-market ">
            {currentPrice ? (
                <span className="crypto_details-market-price">${currentPrice.toFixed(2)}</span>
            ) : (
                ''
            )}
            {marketCap ? <span className="crypto_details-market-cap">${marketCap}</span> : ''}
        </div>
    </div>
);

export default CryptoDetailsHeader;
