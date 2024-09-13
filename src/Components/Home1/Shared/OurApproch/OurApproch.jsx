import React from 'react';
import './OurApproch.css'
import RightArrow from '../../../../assets/home1/rightArrowblack.png'
import { Link } from 'react-router-dom';

const OurApproch = () => {
    return (
        <div>
            {/* <!-- Our approach Start --> */}
            <section className="all_mb ourApproch">
                <div className="container">
                    <div className="text-center">
                        <span>Our approach</span>
                        <p>
                            Our tech-enabled marketing services help your
                            business grow online leads, calls, and revenue.
                        </p>
                        <Link to="/contact-us" className="approchBtn">
                            Let’s Talk
                            <img className="img-fluid" src={RightArrow} alt="Go" />
                        </Link>
                    </div>
                </div>
            </section>
            {/* <!-- Our approach End --> */}
        </div>
    );
};

export default OurApproch;