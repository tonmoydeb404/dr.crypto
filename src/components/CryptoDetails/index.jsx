import React from 'react';
import CryptoDetailsBody from './CryptoDetailsBody';
import CryptoDetailsHeader from './CryptoDetailsHeader';

const CryptoDetails = ({
    className = '',
    icon = null,
    title = null,
    changes = null,
    price = null,
    marketcap = null,
    sparks = null,
    closeBtn = () => {},
}) => (
    <div className={`crypto_details ${className}`}>
        <button onClick={closeBtn} className="crypto_details-close">
            <i className="bi bi-x-square-fill" />
        </button>
        <CryptoDetailsHeader
            title={title}
            changes={changes}
            price={price}
            marketcap={marketcap}
            icon={icon}
        />
        <CryptoDetailsBody data={sparks} />
    </div>
);

export default CryptoDetails;
