import React from 'react';
import './AuthStyle.css'
import Logo from '../../assets/home1/loginLogo.png'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div>
            <div className="small_Area">
                <div className="text-center text-lg-start mb_56">
                    <Link to="/">
                        <img className="img" src={Logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="welcome_div">
                    <p>Create New Account</p>
                    <h6>Please enter details</h6>

                </div>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control email_input" placeholder="Johnson"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control email_input" placeholder="Watson"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control email_input" placeholder="Johnson"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control email_input" placeholder="Watson"/>
                </div>

                {/* <!-- remember text --> */}
                <div className="">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                I agree to the Terms & Condition
                            </label>
                    </div>
                </div>
                <button className="login_btn w-100">Signup</button>
            </div>
        </div>
    );
};

export default SignUpForm;