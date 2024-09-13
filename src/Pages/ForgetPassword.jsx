import React from 'react';
import Signupimg from '../assets/images/signup.png'
import ForgerPasswordForm from '../Components/Auth/ForgerPasswordForm';
import AuthLayOut from '../AuthLayout/AuthLayOut';

const ForgetPassword = () => {
    return (
        <>
            <AuthLayOut AuthImg={Signupimg}>
                <ForgerPasswordForm />
            </AuthLayOut>
        </>
    );
};

export default ForgetPassword;