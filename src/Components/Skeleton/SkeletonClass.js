import React from 'react';

const SkeletonClass = ({type}) => {
    const classes = `skeleton ${type}`;
    return (
        <div className={classes}></div>
    );
};

export default SkeletonClass;