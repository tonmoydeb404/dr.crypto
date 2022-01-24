import React, { useEffect, useState } from 'react';
import CryptoDetails from './CryptoDetails';

const CryptoModal = ({ className = '', cryptoData = null, clearCrypto = () => {} }) => {
    const [crypto, setCrypto] = useState({});

    useEffect(() => {
        if (typeof cryptoData === 'object') {
            setCrypto(cryptoData);
            console.log(cryptoData);
        }

        return () => {
            setCrypto({});
        };
    }, [cryptoData]);

    if (!cryptoData) return '';

    return (
        <div className={`crypto_modal ${className}`}>
            <CryptoDetails
                className="crypto_modal-card"
                icon={crypto.iconUrl}
                title={crypto.name}
                rank={crypto.rank}
                changes={parseFloat(crypto.change)}
                price={parseFloat(crypto.price)}
                marketcap={parseFloat(crypto.marketCap)}
                sparks={crypto.sparkline}
                closeBtn={clearCrypto}
            />
        </div>
    );
};

export default CryptoModal;
