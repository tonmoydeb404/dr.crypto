import React from 'react';

const CryptoDetailsHeader = ({
    className = '',
    icon = null,
    title = null,
    changes = null,
    price = null,
    marketcap = null,
}) => (
    <div className={`crypto_details-header ${className}`}>
        <div className="crypto_details-info">
            {icon ? (
                <img src={icon} alt={title || 'DR. CRYPTO'} className="crypto_details-icon" />
            ) : (
                ''
            )}

            <div>
                {title ? <h2 className="crypto_details-title ">{title}</h2> : ''}

                <h3
                    className={`crypto_details-subtitle ${
                        Math.sign(changes) === 1 ? 'text-green-600' : 'text-red-600'
                    } `}
                >
                    {Math.sign(changes) === 1 ? `+${changes}%` : `${changes}%`}
                </h3>
            </div>
        </div>
        <div className="crypto_details-market mt-3">
            <h3 className="crypto_details-price ">${price.toFixed(2)}</h3>
            <p className="crypto_details-marketcap ">market cap: ${marketcap}</p>
        </div>
    </div>
);

export default CryptoDetailsHeader;
