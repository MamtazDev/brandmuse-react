import React from 'react';
import Errorimg  from '../../assets/images/404.png';

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center mt_150 all_mb">
                    <img className="img-fluid" style={{ maxHeight: '525px' }} src={Errorimg} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default NotFound;