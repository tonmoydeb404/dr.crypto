import React, { useState } from 'react';

const CryptoDetailsDesc = ({ className = '', text = null }) => {
    const [desc, setDesc] = useState(true);

    return (
        <div className={`crypto_details-desc ${className}`}>
            <div className="crypto_details-desc-header ">
                <h3 className="crypto_details-desc-title">Description</h3>

                <i
                    className={`bi bi-caret-${desc ? 'down' : 'up'}-fill crypto_details-desc-icon`}
                    onClick={() => setDesc((prevState) => !prevState)}
                    role="button"
                    tabIndex={-1}
                />
            </div>
            <div className={`crypto_details-desc-body mt-5 ${desc ? '' : 'hidden'}`}>
                {text ? (
                    <p
                        className="crypto_details-desc-text "
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default CryptoDetailsDesc;
