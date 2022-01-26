import React from 'react';

const CardDetailsSkeleton = ({ className = '' }) => (
    <div className={` animate-pulse ${className}`}>
        <div className="crypto_details-header h-20" />
        <div className="crypto_details-sparks h-52" />
        <div className="crypto_details-desc h-72" />
    </div>
);

export default CardDetailsSkeleton;
