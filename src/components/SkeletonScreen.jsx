/* eslint-disable prefer-spread */
/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';

const SkeletonScreen = ({ className = '', count = 0, children }) => (
    <div className={`${className}`}>
        {Array.apply(null, { length: count }).map((skeleton, index) => (
            <Fragment key={`${skeleton} ${index}`}>{children}</Fragment>
        ))}
    </div>
);

export default SkeletonScreen;
