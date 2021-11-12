import React from 'react';
import SkeletonClass from './SkeletonClass';

const SkeletonArticle = () => {
    return (
        <div className="skeleton-container">
            <div className="skeleton-article">
                <SkeletonClass type="title"/>
                <SkeletonClass type="body"/>
                <SkeletonClass type="body"/>
                <SkeletonClass type="body"/>
            </div>
        </div>
    );
};

export default SkeletonArticle;