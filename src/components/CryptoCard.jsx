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
    <div className={`crypto_card relative p-4 bg-slate-800 rounded overflow-hidden ${className}`}>
        <span className="crypto_card-rank absolute bottom-0 right-0 px-1.5 py-0.5 bg-blue-600 text-sm inline-block rounded-tl-sm">
            {rank}
        </span>
        <div className="crypto_card-header flex gap-x-2">
            {icon ? (
                <img
                    src={icon}
                    alt={title || 'DR. CRYPTO'}
                    className="crypto_card-icon w-16 h-fit"
                />
            ) : (
                ''
            )}

            <div>
                {title ? <h2 className="crypto_card-title text-xl font-semibold">{title}</h2> : ''}

                <h3
                    className={`crypto_card-subtitle font-medium text-base ${
                        Math.sign(changes) === 1 ? 'text-green-600' : 'text-red-600'
                    } `}
                >
                    {Math.sign(changes) === 1
                        ? `+${changes.toFixed(2)}%`
                        : `${changes.toFixed(2)}%`}
                </h3>
            </div>
        </div>
        <div className="crypto_card-body mt-3">
            <h3 className="crypto_card-heading text-2xl font-semibold">${price.toFixed(2)}</h3>
            <p className="crypto_card-subheading text-sm text-slate-300">
                market cap: ${marketcap}
            </p>
        </div>
    </div>
);

export default CryptoCard;
