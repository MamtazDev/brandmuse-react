import React from 'react';
import AuthLayOut from '../AuthLayout/AuthLayOut';
import Signupimg from '../assets/images/signup.png'
import SignUpForm from '../Components/Auth/SignUpForm'

const SignUp = () => {
    return (
        <div>
            <AuthLayOut AuthImg={Signupimg}>
                <SignUpForm/>
            </AuthLayOut>
        </div>
    );
};

export default SignUp;