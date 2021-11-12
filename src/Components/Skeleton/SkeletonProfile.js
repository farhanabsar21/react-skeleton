import React from 'react';
import SkeletonClass from './SkeletonClass';

const SkeletonProfile = () => {
    return (
        <div className="skeleton-container">
            <div className="skeleton-profile grid grid-1-2">
                <div>
                    <SkeletonClass type="avatar"/>
                </div>
                <div>
                    <SkeletonClass type="title"/>
                    <SkeletonClass type="body"/>
                    <SkeletonClass type="body"/>
                </div>
            </div>
        </div>
    );
};

export default SkeletonProfile;