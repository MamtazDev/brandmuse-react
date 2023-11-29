import React from 'react';
import Arrow from '../../assets/home3/letsWork.png'

const LetsWork = () => {
    return (
        <div className='home3LetsTalk'>
            <div class="container">
                <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
                    <p class="fs_68 fc_initial">
                        Let’s Work
                        Together
                    </p>
                    <a href="contactUs.html">
                        <img class="img-fluid letswork" src={Arrow} alt="img" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LetsWork;