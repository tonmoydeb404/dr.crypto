import React from 'react';
import { Sparklines, SparklinesCurve } from 'react-sparklines';

const CryptoDetailsSparks = ({ className = '', data = null }) => (
    <div className={`crypto_details-sparks ${className}`}>
        {data ? (
            <Sparklines data={data}>
                <SparklinesCurve color="#2563eb" />
            </Sparklines>
        ) : (
            ''
        )}
    </div>
);

export default CryptoDetailsSparks;
