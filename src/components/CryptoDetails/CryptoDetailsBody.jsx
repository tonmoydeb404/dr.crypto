import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CryptoDetailsBody = ({ className = '', data = null }) => (
    <div className={`crypto_details-body ${className}`}>
        {data ? (
            <Sparklines data={data}>
                <SparklinesLine color="#2563eb" />
            </Sparklines>
        ) : (
            ''
        )}
    </div>
);

export default CryptoDetailsBody;
