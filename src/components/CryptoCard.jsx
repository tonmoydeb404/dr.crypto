import React from 'react';

const CryptoCard = ({
    className = '',
    icon = null,
    title = null,
    changes = null,
    price = null,
    marketcap = null,
    rank = null,
}) => (
    <div className={`crypto_card ${className}`}>
        <span className="crypto_card-rank ">{rank}</span>
        <div className="crypto_card-header ">
            {icon ? (
                <img src={icon} alt={title || 'DR. CRYPTO'} className="crypto_card-icon" />
            ) : (
                ''
            )}

            <div>
                {title ? <h2 className="crypto_card-title">{title}</h2> : ''}

                {typeof changes === 'number' ? (
                    <h3
                        className={`crypto_card-subtitle ${
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
        {price || marketcap ? (
            <div className="crypto_card-body mt-3">
                {typeof price === 'number' ? (
                    <h3 className="crypto_card-heading ">${price.toFixed(2)}</h3>
                ) : (
                    ''
                )}
                {typeof marketcap === 'number' ? (
                    <p className="crypto_card-subheading ">market cap: ${marketcap}</p>
                ) : (
                    ''
                )}
            </div>
        ) : (
            ''
        )}
    </div>
);

export default CryptoCard;
