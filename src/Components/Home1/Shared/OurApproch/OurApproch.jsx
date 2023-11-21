import React from 'react';
import RightArrow from '../../../../assets/home1/rightArrowblack.png'

const OurApproch = () => {
    return (
        <div>
            {/* <!-- Our approach Start --> */}
            <section class="all_mb ourApproch">
                <div class="container">
                    <div class="text-center">
                        <span>Our approach</span>
                        <p>
                            Our tech-enabled marketing services help your
                            business grow online leads, calls, and revenue.
                        </p>
                        <a href="contactUs.html" class="approchBtn">
                            Let’s Talk
                            <img class="img-fluid" src={RightArrow} alt="Go" />
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- Our approach End --> */}
        </div>
    );
};

export default OurApproch;