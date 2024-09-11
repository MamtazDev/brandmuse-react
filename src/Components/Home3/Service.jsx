import React from 'react';
import Arrow from '../../assets/home3/arrow_05.png';

const Service = () => {
    return (
        <div>
            <section className="mb_130 home3Bg">
                <div className="container">
                    <div className="bottomBorder d-flex justify-content-between align-items-center pb_48">
                        <p className="fs_48 fc_initial">
                            Our Services can help you save money, time, and
                            <span className="fc_primary">promote</span> your <span className="fc_primary">products</span>.
                        </p>
                        <img className="img-fluid" src={Arrow} alt="img" />
                    </div>
                    <div
                        className="marketCost d-flex flex-column flex-md-row justify-content-start align-items-center mt_48 pb_48 bottomBorder ">
                        <p className="fs_68 fc_initial">$96</p>
                        <p className="fs_18 fc_initial">
                            Reduce marketing costs for your product. Finding the best marketing solution for your business
                        </p>
                    </div>
                    <div
                        className="marketCost d-flex flex-column flex-md-row justify-content-start align-items-center mt_48 pb_48 bottomBorder ">
                        <p className="fs_68 fc_initial">87%</p>
                        <p className="fs_18 fc_initial">
                            Businesses benefit greatly from marketing campaigns. data-driven, with a focus on human
                            behavior. Reduce the
                            price of your product's promotion.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;