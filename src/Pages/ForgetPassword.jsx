import React from 'react';
import Signupimg from '../assets/images/signup.png'
import ForgerPasswordForm from '../Components/Auth/ForgerPasswordForm';
import AuthLayOut from '../AuthLayout/AuthLayOut';

const ForgetPassword = () => {
    return (
        <div>
            <AuthLayOut AuthImg={Signupimg}>
                <ForgerPasswordForm />
            </AuthLayOut>
        </div>
    );
};

export default ForgetPassword;