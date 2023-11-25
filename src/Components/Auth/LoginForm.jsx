import React from 'react';
import './AuthStyle.css'
import Logo from '../../assets/home1/loginLogo.png'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div>
            <div class="small_Area">
                <div class="text-center text-lg-start mb_56">
                    <Link to="/" >
                        <img class="img-fluid" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div class="welcome_div">
                    <p>Welcome 👋</p>
                    <h6>Please login here</h6>

                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" class="form-control email_input w-100"
                        placeholder="Johnson.watson@exmple.com" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="password" class="form-control email_input" placeholder="password" />
                </div>

                {/* <!-- remember text --> */}
                <div class="d-flex justify-content-between align-items-center">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                            checked />
                        <label class="form-check-label remember" htmlFor="flexCheckChecked">
                            Remember Me
                        </label>
                    </div>
                    <Link to="/forgetPassword" class="forget">Forgot Password?</Link>
                </div>
                <button class="login_btn w-100">Login</button>
            </div>
        </div>
    );
};

export default LoginForm;