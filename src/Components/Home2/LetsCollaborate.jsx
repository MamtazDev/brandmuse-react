import React from 'react';
import Collaborate from '../../assets/home2/collaborate.png'

const LetsCollaborate = () => {
    return (
        <div>
            {/* <!-- Lets Collabotrate Start --> */}
            <section class="collaborateBg mt_170">
                <div class="container">

                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                        <h2 class="fc_initial fs_68">
                            Let’s Collaborate<br /> with us!
                        </h2>
                        <a href="#">
                            <img class="img-fluid collaborateimg" src={Collaborate} alt="img"/>
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- Lets Collabotrate End --> */}
        </div>
    );
};

export default LetsCollaborate;