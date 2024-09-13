/* eslint-disable react/prop-types */
import React from 'react';
    
const AuthLayOut = ({AuthImg,children}) => {
    return (
        <div>
            <section className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="login_left_wrapper">
                          {children}
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 d-lg-block d-none">
                        <img style={{width:"100%",height:"100vh"}} className="img-fluid" src={AuthImg} alt="img"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuthLayOut;