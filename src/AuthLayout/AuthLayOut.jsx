import React from 'react';

const AuthLayOut = ({AuthImg,children}) => {
    return (
        <div>
            <section class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="login_left_wrapper">
                          {children}
                        </div>
                    </div>
                    <div class="col-lg-6 p-0 d-lg-block d-none">
                        <img class="img-fluid" src={AuthImg} alt="img"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuthLayOut;