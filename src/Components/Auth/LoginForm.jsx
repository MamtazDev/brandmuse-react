import React from 'react';
import './AuthStyle.css'
import Logo from '../../assets/home1/loginLogo.png'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div>
            <div className="small_Area">
                <div className="text-center text-lg-start mb_56">
                    <Link to="/" >
                        <img className="img-fluid" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="welcome_div">
                    <p>Welcome 👋</p>
                    <h6>Please login here</h6>

                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control email_input w-100"
                        placeholder="Johnson.watson@exmple.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="password" className="form-control email_input" placeholder="password" />
                </div>

                {/* <!-- remember text --> */}
                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label remember" htmlFor="flexCheckChecked">
                            Remember Me
                        </label>
                    </div>
                    <Link to="/forgetPassword" className="forget">Forgot Password?</Link>
                </div>
                <button className="login_btn w-100">Login</button>
            </div>
        </div>
    );
};

export default LoginForm;