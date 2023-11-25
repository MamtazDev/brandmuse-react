import React from 'react';
import AuthLayOut from '../AuthLayout/AuthLayOut';
import LoginForm from '../Components/Auth/LoginForm';
import Loginimg from '../assets/images/login1.png'

const SignIn = () => {
    return (
        <div>
            <AuthLayOut AuthImg={Loginimg}>
                <LoginForm />
            </AuthLayOut>
        </div>
    );
};

export default SignIn;