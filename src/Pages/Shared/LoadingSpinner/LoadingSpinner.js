import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div style={{ backgroundColor: '#6c5ce7' }} className="spinner-grow text-center" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default LoadingSpinner;