import React from 'react';
import './AuthStyle.css'
import Logo from '../../assets//images/leftarrow.png'
import { Link } from 'react-router-dom';

const ForgerPasswordForm = () => {
    return (
        <div>
            <div className="small_Area">
                <div className="text-center mb_56">
                    <Link to="/login" className="backBtn d-flex justify-content-start align-items-center gap-2">
                        <img src={Logo} alt="img" />
                        Back
                    </Link>
                </div>
                <div className="welcome_div">
                    <p>Forgot Password</p>
                    <h6>
                        Enter your registered email address. we'll send you
                        a code to reset your password.
                    </h6>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control email_input" id="exampleFormControlInput1"
                        placeholder="Johnson.watson@exmple.com" />
                </div>
                <button className="login_btn w-100">Send</button>
            </div>
        </div>
    );
};

export default ForgerPasswordForm;