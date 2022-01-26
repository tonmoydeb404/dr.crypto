import React from 'react';

const CardSkeleton = ({ className = '', header = false, body = false }) => (
    <div className={`crypto_card animate-pulse ${className}`}>
        {header ? (
            <div className="skeleton_card-header flex space-x-2 items-center ">
                <div className="skeleton_card-img w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-slate-700" />
                <div className="flex flex-col gap-2 flex-1">
                    <div className="h-4 bg-slate-700 rounded w-3/4" />
                    <div className="h-2 bg-slate-700 rounded w-2/4" />
                </div>
            </div>
        ) : (
            ''
        )}
        {body ? (
            <div className="skeleton_card-body flex flex-col gap-2 mt-3">
                <div className="h-2.5 bg-slate-700 rounded w-11/12" />
                <div className="h-2 bg-slate-700 rounded w-8/12" />
            </div>
        ) : (
            ''
        )}
    </div>
);

export default CardSkeleton;
